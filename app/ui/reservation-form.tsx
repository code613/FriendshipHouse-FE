"use client";

import { lusitana } from "@/app/ui/fonts";
import { Button } from "@/app/ui/button";
import { submitPatient } from "@/app/lib/actions";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useActionState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import PatientDetails from "./patient-form/patient-details";
import GuestDetails from "./guest-form/guest-details";

export default function ReservationForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    submitPatient,
    undefined
  );

  return (
    <form action={formAction} className="space-y-3 text-gray-900">
      <div className="rounded-lg bg-gray-50 px-8 pb-8 pt-12">
        <h1 className={`${lusitana.className} mb-4 text-2xl`}>
          Please enter reservation details.
        </h1>
        <div>
          <label>Friendship House Location:</label>
          <select
            name="friendshipHouseLocation"
            className="w-full border rounded p-3"
          >
            <option value="Cleveland">Cleveland</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
          <hr className="my-4" />

          <label>Patient details:</label>
          <PatientDetails />
          <hr className="my-4" />
          <label>Guest details:</label>
          <Accordion showDivider={true}>
            <AccordionItem title={<p className="text-xs">Guest 1</p>}>
              <GuestDetails />
            </AccordionItem>
            <AccordionItem title={<p className="text-xs">Guest 2</p>}>
              <GuestDetails />
            </AccordionItem>
          </Accordion>

          <Button className="mt-4" aria-disabled={isPending}>
            Submit
          </Button>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage ? (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </form>
  );
}
