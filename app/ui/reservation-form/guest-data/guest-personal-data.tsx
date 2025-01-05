import PhoneNumber from "../phone-number";

export default function GuestPersonalData({ index }: { index: number }) {
  return (
    <>
      <div className="flex mb-4 space-x-4">
        <input
          type="text"
          name={`guest.${index}.firstName`}
          placeholder="First Name"
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name={`guest.${index}.lastName`}
          placeholder="Last Name"
          className="w-full border rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name={`guest.${index}.relationship`}
          placeholder="Relationship to patient"
          className="w-full border rounded p-2"
          required
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
              required
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name={`guest.${index}.gender`}
              value="Female"
              className="mr-2"
              required
            />
            Female
          </label>
        </div>
      </div>
      <div className="flex mb-4 space-x-4">
        <PhoneNumber inputName={`guest.${index}.cell`} />
        <input
          type="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address (e.g., user@example.com)"
          name={`guest.${index}.email`}
          placeholder="Email"
          className="w-full border rounded p-2"
          required
        />
      </div>
    </>
  );
}
