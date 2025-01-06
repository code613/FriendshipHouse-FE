import { lusitana } from "@/app/ui/fonts";

export default function FriendshipHouseDetails({locations}: {locations: string[]}) {
  return (
    <>
      <div>
        <h2 className={`${lusitana.className} mt-6 mb-4 text-lg font-bold`}>
          Friendship house location
        </h2>
        <select
          id="friendshipHouseLocation"
          name="friendshipHouseLocation"
          className="block w-full border rounded p-2"
        >
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
