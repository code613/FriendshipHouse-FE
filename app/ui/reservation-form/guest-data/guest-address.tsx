import { getStates } from "@/app/utils/state-data";
import clsx from "clsx";
import { useState } from "react";

export default function GuestAddress({
  index,
  defaultState,
  defaultCity,
  defaultStreet,
  defaultHouseNumber,
  defaultEntrance,
  defaultZip,
}: {
  index: number;
  defaultState: string;
  defaultCity: string;
  defaultStreet: string;
  defaultHouseNumber: string;
  defaultEntrance: string;
  defaultZip: string;
}) {
  const [state, setState] = useState(defaultState);
  const states = getStates();
  return (
    <>
      <h2 className="mt-6 mb-4 text-lg font-bold">Guest address</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <select
          id={`guest.${index}.state`}
          name={`guest.${index}.state`}
          className={clsx(
            "block w-full border rounded p-2",
            "invalid:text-gray-400",
            "valid:text-gray-900"
          )}
          value={state}
          required
          onChange={(e) => setState(e.target.value)}
        >
          <option value="" defaultValue={""} disabled hidden>
            State
          </option>
          {states.map((state, index) => (
            <option key={index} value={state} className="text-gray-900">
              {state}
            </option>
          ))}
        </select>
        <input
          type="text"
          name={`guest.${index}.city`}
          placeholder="City"
          className="border rounded p-2"
          required
          defaultValue={defaultCity}
        />
        <input
          type="text"
          name={`guest.${index}.street`}
          placeholder="Street"
          className="border rounded p-2"
          required
          defaultValue={defaultStreet}
        />
        <input
          type="text"
          name={`guest.${index}.houseNumber`}
          placeholder="House Number"
          className="border rounded p-2"
          required
          defaultValue={defaultHouseNumber}
        />
        <input
          type="text"
          name={`guest.${index}.entrance`}
          placeholder="Entrance"
          className="border rounded p-2"
          defaultValue={defaultEntrance}
        />
        <input
          type="text"
          name={`guest.${index}.zip`}
          placeholder="Zip"
          className="border rounded p-2"
          pattern="\d{5}"
          title="Please enter exactly 5 digits"
          required
          defaultValue={defaultZip}
        />
      </div>
    </>
  );
}
