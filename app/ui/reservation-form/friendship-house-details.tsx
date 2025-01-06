import { getFriendshipHouseLocations } from "@/app/lib/actions";
import { lusitana } from "@/app/ui/fonts";
import { useEffect, useState } from "react";

export default function FriendshipHouseDetails() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const updateData = async () => {
      const friendshipHouseLocations = await getFriendshipHouseLocations();
      setData(friendshipHouseLocations);
    };

    updateData();
  }, []);

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
          {data.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
