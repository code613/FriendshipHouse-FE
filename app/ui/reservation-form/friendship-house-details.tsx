import { lusitana } from "@/app/ui/fonts";

export default function FriendshipHouseDetails() {
  return (
    <>
      <div>
        <h2 className={`${lusitana.className} mt-6 mb-4 text-lg font-bold`}>
          Friendship house location
        </h2>
        <select
          id="friendshipHouseLocation"
          name="friendshipHouseLocation"
          className="block w-full border-gray-300 rounded-md shadow-lg focus:ring-indigo-500 focus:border-indigo-500 p-3"
        >
          <option value="Cleveland">Cleveland</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>
      </div>
    </>
  );
}
