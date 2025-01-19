"use client";

import { lusitana } from "@/app/ui/fonts";
import { submitReservation } from "@/app/lib/actions";
import { useActionState, useState, startTransition } from "react";
import PatientDetails from "./patient-data/patient-details";
import FriendshipHouseDetails from "./friendship-house-details";
import GuestList from "./guest-data/guest-list";
import SubmitButton from "./submit-button";
import Guidelines from "./guidelines";
import { FriendshipHouseLocation } from "@/app/interfaces/frienship-house-location";
import SubmitPopup from "./submit-popup";

export default function ReservationForm({
  friendshipHouseLocations,
}: {
  friendshipHouseLocations: FriendshipHouseLocation[];
}) {
  const [location, setLocation] = useState<FriendshipHouseLocation | undefined>(
    {
      name: "",
      subLocations: [],
    }
  );

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [submitState, formAction, isPending] = useActionState(
    submitReservation,
    undefined
  );

  const onSubmit = (formData: FormData) => {
    startTransition(() => {
      formAction(formData);
    });
    setIsPopupVisible(true);
  };

  const onClosePopup = () => {
    setIsPopupVisible(false);
    if (submitState?.isSuccess) {
      window.location.reload();
    }
  };

  const onSelectLocation = (val:string) =>{
    const current = friendshipHouseLocations.find(
      (l) => l.name === val
    );
    setLocation(current);
  }

  const Border = () => {
    return <hr className="border-gray-300" />;
  };

  return (
    <form
      id="reservation-form"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        onSubmit(formData);
      }}
      className="space-y-6 text-gray-900 max-w-2xl mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg"
    >
      <div>
        <h1
          className={`${lusitana.className} mb-6 text-3xl font-bold text-center underline`}
        >
          Reservation Details
        </h1>
        <div className="space-y-4">
          <FriendshipHouseDetails
            locations={friendshipHouseLocations.map(
              (location) => location.name
            )}
            selectedLocation={location?.name}
            onSelectLocation={onSelectLocation}
          />
          <Border />
          <PatientDetails
            recommendedFacilities={location?.subLocations.map((f) => f.name)}
          />
          <Border />
          <GuestList />
          <Border />
          <Guidelines />
          <SubmitButton isPending={isPending} />

          {isPopupVisible && submitState && !isPending &&(
            <SubmitPopup
              isSuccess={submitState.isSuccess}
              message={submitState.message}
              onClose={onClosePopup}
            />
          )}
        </div>
      </div>
    </form>
  );
}
