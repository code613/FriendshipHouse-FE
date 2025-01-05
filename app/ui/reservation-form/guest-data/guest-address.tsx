export default function GuestAddress({ index }: { index: number }) {
  return (
    <>
      <h2 className="mt-6 mb-4 text-lg font-bold">Guest address</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name={`guest.${index}.state`}
          placeholder="State"
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          name={`guest.${index}.city`}
          placeholder="City"
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          name={`guest.${index}.street`}
          placeholder="Street"
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          name={`guest.${index}.houseNumber`}
          placeholder="House Number"
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          name={`guest.${index}.entrance`}
          placeholder="Entrance"
          className="border rounded p-2"
        />
        <input
          type="text"
          name={`guest.${index}.zip`}
          placeholder="Zip"
          className="border rounded p-2"
          pattern="\d{5}"
          title="Please enter exactly 5 digits"
          required
        />
      </div>
    </>
  );
}
