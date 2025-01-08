import React, { useCallback, useEffect, useState } from "react";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";
import Combobox from "react-widgets/Combobox";

import "react-widgets/styles.css";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;

export default function AutoCompleteAddress() {
  return (
      <APIProvider apiKey={API_KEY}>
        <AutocompleteCustomHybrid onPlaceSelect={() => {}} />
      </APIProvider>
  );
}

interface Props {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

export const AutocompleteCustomHybrid = ({ onPlaceSelect }: Props) => {
  const places = useMapsLibrary("places");

  const [sessionToken, setSessionToken] =
    useState<google.maps.places.AutocompleteSessionToken>();

  const [autocompleteService, setAutocompleteService] =
    useState<google.maps.places.AutocompleteService | null>(null);

  const [placesService, setPlacesService] =
    useState<google.maps.places.PlacesService | null>(null);

  const [predictionResults, setPredictionResults] = useState<
    Array<google.maps.places.AutocompletePrediction>
  >([]);

  const [inputValue, setInputValue] = useState<string>("");

  const [fetchingData, setFetchingData] = useState<boolean>(false);

  useEffect(() => {
    if (!places) return;

    setAutocompleteService(new places.AutocompleteService());
    setPlacesService(new places.PlacesService(document.createElement("div")));
    setSessionToken(new places.AutocompleteSessionToken());

    return () => setAutocompleteService(null);
  }, [places]);

  const fetchPredictions = useCallback(
    async (inputValue: string) => {
      if (!autocompleteService || !inputValue) {
        return;
      }

      setFetchingData(true);

      const request = { input: inputValue, sessionToken };
      const response = await autocompleteService.getPlacePredictions(request);

      setPredictionResults(response.predictions);
      setFetchingData(false);
    },
    [autocompleteService, sessionToken]
  );

  const onInputChange = useCallback(
    (value: google.maps.places.AutocompletePrediction | string) => {
      if (typeof value === "string") {
        setInputValue(value);
        fetchPredictions(value);
      }
    },
    [fetchPredictions]
  );

  const onSelect = useCallback(
    (prediction: google.maps.places.AutocompletePrediction | string) => {
      if (!places || typeof prediction === "string") return;

      setFetchingData(true);

      const detailRequestOptions = {
        placeId: prediction.place_id,
        fields: ["geometry", "name", "formatted_address"],
        sessionToken,
      };

      const detailsRequestCallback = (
        placeDetails: google.maps.places.PlaceResult | null
      ) => {
        onPlaceSelect(placeDetails);
        setInputValue(placeDetails?.formatted_address ?? "");
        setSessionToken(new places.AutocompleteSessionToken());

        setFetchingData(false);
      };

      placesService?.getDetails(detailRequestOptions, detailsRequestCallback);
    },
    [onPlaceSelect, places, placesService, sessionToken]
  );

  return (
    <div className="autocomplete-container">
      <Combobox
        placeholder="Search for a place"
        data={predictionResults}
        dataKey="place_id"
        textField="description"
        value={inputValue}
        onChange={onInputChange}
        onSelect={onSelect}
        busy={fetchingData}
        // Since the Autocomplete Service API already returns filtered results
        // always want to display them all.
        filter={() => true}
        focusFirstItem={true}
        hideEmptyPopup
        hideCaret
      />
    </div>
  );
};
