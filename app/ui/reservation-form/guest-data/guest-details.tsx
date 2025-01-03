import GuestAddress from "./guest-address";

export default function GuestDetails({ index }: { index: number }) {
  return (
    <>
      <div className="p-4 bg-gray-50 rounded-md shadow-sm">
        <div className="flex mb-4 space-x-4">
          <input
            type="text"
            name={`guest.${index}.firstName`}
            placeholder="First Name"
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            name={`guest.${index}.lastName`}
            placeholder="Last Name"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name={`guest.${index}.relationship`}
            placeholder="Relationship to patient"
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Gender</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name={`guest.${index}.gender`}
                value="Male"
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name={`guest.${index}.gender`}
                value="Female"
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>
        <div className="flex mb-4 space-x-4">
          <input
            type="text"
            name={`guest.${index}.cell`}
            placeholder="Cell"
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            name={`guest.${index}.email`}
            placeholder="Email"
            className="w-full border rounded p-2"
          />
        </div>

        <GuestAddress index={index} />

        <h2 className="mt-6 mb-4 text-lg font-bold">Check-in</h2>
        <div className="mb-4">
          <input
            type="date"
            name={`guest.${index}.checkInDate`}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            name={`guest.${index}.checkOutDate`}
            className="w-full border rounded p-2"
          />
        </div>
      </div>
    </>
  );
}
