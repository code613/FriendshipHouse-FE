"use client";

import { lusitana } from "@/app/ui/fonts";
import { Button } from "@/app/ui/button";
import { submitPatient } from "@/app/lib/actions";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useActionState } from "react";

export default function PatientForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    submitPatient,
    undefined
  );

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl text-gray-900`}>
          Please enter patient details.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="first_name"
            >
              First Name*
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 !text-gray-900"
                id="first_name"
                type="text"
                name="first_name"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="last_name"
            >
              Last Name*
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 !text-gray-900"
                id="last_name"
                type="text"
                name="last_name"
                required
              />
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full" aria-disabled={isPending}>
          Submit{" "}
          {/* Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /> */}
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
