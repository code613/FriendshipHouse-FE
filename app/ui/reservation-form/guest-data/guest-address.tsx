import { Address } from "@/app/interfaces/address";
import { getStates } from "@/app/utils/state-data";
import clsx from "clsx";
import { useState } from "react";
import AutoCompleteAddress from "../../auto-complete-address";
import Combobox from "react-widgets/Combobox";

export default function GuestAddress({
  index,
  defaultCountry,
  defaultState,
  defaultCity,
  defaultStreet,
  defaultHouseNumber,
  defaultZip,
}: {
  index: number;
  defaultCountry: string;
  defaultState: string;
  defaultCity: string;
  defaultStreet: string;
  defaultHouseNumber: string;
  defaultZip: string;
}) {
  const [address, setAddress] = useState<Address>({
    street: defaultStreet,
    city: defaultCity,
    state: defaultState,
    country: defaultCountry,
    houseNumber: defaultHouseNumber,
    zip: defaultZip,
  });

  const states = getStates();
  const countries = ["United States", "Israel", "France", "United Kingdom"];
  return (
    <>
      <h2 className="mt-6 mb-4 text-lg font-bold">Address</h2>
      <AutoCompleteAddress setAddress={setAddress} />

      <div className="border border-gray-300 rounded-lg p-4 grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name={`guest.${index}.houseNumber`}
          placeholder="House Number"
          className="border rounded p-2"
          required
          value={address?.houseNumber || ""}
          onChange={(e) =>
            setAddress({ ...address, houseNumber: e.target.value })
          }
        />
        <input
          type="text"
          name={`guest.${index}.street`}
          placeholder="Street"
          className="border rounded p-2"
          required
          value={address?.street || ""}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
        />
        <input
          type="text"
          name={`guest.${index}.city`}
          placeholder="City"
          className="border rounded p-2"
          required
          value={address?.city || ""}
          onChange={(e) => setAddress({ ...address, city: e.target.value })}
        />
        <select
          id={`guest.${index}.state`}
          name={`guest.${index}.state`}
          className={clsx(
            "w-full border rounded p-2",
            "disabled:bg-gray-200 text-gray-600",
            "invalid:text-gray-400",
            "valid:text-gray-900"
          )}
          required
          disabled={address.country !== "United States"}
          value={address?.state || ""}
          onChange={(e) => setAddress({ ...address, state: e.target.value })}
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
        <Combobox
          inputProps={{required:true}}
          placeholder="Country"
          data={countries}
          // dataKey={`guest.${index}.country`}
          name={`guest.${index}.country`}
          id={`guest.${index}.country`}
          textField="description"
          style={{ border: "red" }}
          focusFirstItem={true}
          hideEmptyPopup
          hideCaret
          className="w-full border-none"
          value={address?.country || ""}
          onChange={(country) => {
            setAddress((prevAddress) => ({
              ...prevAddress,
              country,
              state: country !== "United States" ? "" : prevAddress.state,
            }));
          }}
        />
        {/* <select
          id={`guest.${index}.country`}
          name={`guest.${index}.country`}
          className={clsx(
            "block w-full border rounded p-2",
            "invalid:text-gray-400",
            "valid:text-gray-900"
          )}
          required
          value={address?.country || ""}
          onChange={(e) => {
            const country = e.target.value;
            setAddress((prevAddress) => ({
              ...prevAddress,
              country,
              state: country !== "United States" ? "" : prevAddress.state,
            }));
          }}
        >
          <option value="" defaultValue={""} disabled hidden>
            Country
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country} className="text-gray-900">
              {country}
            </option>
          ))}
        </select> */}
        <input
          type="text"
          name={`guest.${index}.zip`}
          placeholder="Zip"
          className="border rounded p-2"
          pattern="\d{5}"
          title="Please enter exactly 5 digits"
          value={address?.zip || ""}
          onChange={(e) => setAddress({ ...address, zip: e.target.value })}
          required
        />
      </div>
    </>
  );
}
