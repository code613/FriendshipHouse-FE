import { lusitana } from "@/app/ui/fonts";
import clsx from "clsx";
import { useState } from "react";

export default function FriendshipHouseDetails({
  locations,
}: {
  locations: string[];
}) {
  const [location, setLocation] = useState("");

  return (
    <>
      <div>
        <h2 className={`${lusitana.className} mt-6 mb-4 text-lg font-bold`}>
          Friendship house location
        </h2>
        <select
          id="friendshipHouseLocation"
          name="friendshipHouseLocation"
          className={clsx(
            "block w-full border rounded p-2",
            "invalid:text-gray-400",
            "valid:text-gray-900"
          )}
          value={location}
          required
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        >
          <option value="" defaultValue={""} disabled hidden>
            Location
          </option>
          {locations.map((location, index) => (
            <option key={index} value={location} className="text-gray-900">
              {location}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
