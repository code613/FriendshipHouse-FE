import PhoneNumber from "../phone-number";

export default function GuestContactData({
  index,
  defaultPhone = "",
  defaultEmail = "",
}: {
  index: number;
  defaultPhone: string;
  defaultEmail: string;
}) {
  return (
    <>
      <div className="flex mb-4 space-x-4">
        <PhoneNumber
          inputName={`guest.${index}.cell`}
          defaultPhone={defaultPhone}
        />
        <input
          type="email"
          title="Please enter a valid email address (e.g., user@example.com)"
          name={`guest.${index}.email`}
          placeholder="Email"
          className="w-full border rounded p-2"
          required
          defaultValue={defaultEmail}
        />
      </div>
    </>
  );
}
