import React, { useCallback, useEffect, useState } from "react";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";
import { FaSearch } from "react-icons/fa";
import Combobox from "react-widgets/Combobox";

import "react-widgets/styles.css";
import { Address } from "../interfaces/address";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY!;

export default function AutoCompleteAddress({
  setAddress,
}: {
  setAddress: (address: Address) => void;
}) {
  return (
    <div className="mb-4">
      <APIProvider apiKey={API_KEY}>
        <AutocompleteCustomHybrid
          onPlaceSelect={(place) => {
            const components = place?.address_components;

            const address = mapAddressComponents(components);
            setAddress(address);
          }}
        />
      </APIProvider>
    </div>
  );
}

export function mapAddressComponents(
  addressComponents: google.maps.GeocoderAddressComponent[] | undefined
): Address {
  // Helper function to find a component by type
  const getComponent = (type: string): string | undefined => {
    const component = addressComponents?.find((c) => c.types.includes(type));
    return component ? component.long_name : undefined;
  };

  const houseNumber = getComponent("street_number");
  const street = getComponent("route");
  const city =
    getComponent("locality") || getComponent("administrative_area_level_2"); // Fallback
  const country = getComponent("country");
  const zip = getComponent("postal_code");
  const state =
    country === "United States"
      ? getComponent("administrative_area_level_1")
      : "";

  return {
    houseNumber,
    street,
    city,
    country,
    state,
    zip,
  };
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
        fields: ["formatted_address", "types", "address_components"],
        sessionToken,
      };

      const detailsRequestCallback = (
        placeDetails: google.maps.places.PlaceResult | null
      ) => {
        onPlaceSelect(placeDetails);
        console.log(placeDetails);
        setInputValue(placeDetails?.formatted_address ?? "");
        setSessionToken(new places.AutocompleteSessionToken());

        setFetchingData(false);
      };

      placesService?.getDetails(detailRequestOptions, detailsRequestCallback);
    },
    [onPlaceSelect, places, placesService, sessionToken]
  );

  return (
    <div className="flex items-center w-full">
      <Combobox
        placeholder="Search for an address..."
        data={predictionResults}
        dataKey="place_id"
        textField="description"
        value={inputValue}
        onChange={onInputChange}
        onSelect={onSelect}
        busy={fetchingData}
        filter={() => true}
        focusFirstItem={true}
        hideEmptyPopup
        hideCaret
        className="flex-grow"
      />
      <FaSearch className="ml-2 text-xl cursor-pointer" />
    </div>
  );
};
