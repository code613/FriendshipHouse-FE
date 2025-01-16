import { lusitana } from "@/app/ui/fonts";
import clsx from "clsx";

export default function FriendshipHouseDetails({
  locations,
  selectedLocation,
  onSelectLocation
}: {
  locations: string[];
  selectedLocation: string | undefined;
  onSelectLocation: (name: string) => void 
}) {

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
          value={selectedLocation}
          required
          onChange={(e) => {
            onSelectLocation(e.target.value);
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
