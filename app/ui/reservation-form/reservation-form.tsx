"use client";

import { lusitana } from "@/app/ui/fonts";
import { submitReservation } from "@/app/lib/actions";
import { useActionState } from "react";
import PatientDetails from "./patient-data/patient-details";
import FriendshipHouseDetails from "./friendship-house-details";
import GuestList from "./guest-data/guest-list";
import SubmitButton from "./submit-button";
import { redirect } from "next/navigation";
import Guidelines from "./guidelines";

export default function ReservationForm({
  friendshipHouseLocations,
}: {
  friendshipHouseLocations: string[];
}) {
  const [errorMessage, formAction, isPending] = useActionState(
    submitReservation,
    undefined
  );

  const onSubmit = (formData: FormData) => {
    formAction(formData);
    redirect("/reservation-confirmation");
  };

  const Border = () => {
    return <hr className="border-gray-300" />;
  };

  return (
    <form
      id="reservation-form"
      action={onSubmit}
      className="space-y-6 text-gray-900 max-w-2xl mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg"
    >
      <div>
        <h1
          className={`${lusitana.className} mb-6 text-3xl font-bold text-center underline`}
        >
          Reservation Details
        </h1>
        <div className="space-y-4">
          <FriendshipHouseDetails locations={friendshipHouseLocations} />
          <Border />
          <PatientDetails />
          <Border />
          <GuestList />
          <Border />
          <Guidelines />
          <SubmitButton isPending={isPending} errorMessage={errorMessage} />
        </div>
      </div>
    </form>
  );
}
