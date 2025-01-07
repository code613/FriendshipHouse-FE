import PhoneNumber from "../phone-number";

export default function GuestContactData({
  index,
}: {
  index: number;
}) {
  return (
    <>
      <div className="flex mb-4 space-x-4">
        <PhoneNumber
          inputName={`guest.${index}.cell`}
        />
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
