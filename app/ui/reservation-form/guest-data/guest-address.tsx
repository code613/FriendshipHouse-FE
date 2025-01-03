export default function GuestAddress({ index }: { index: number }) {
  return (
    <>
      <h2 className="mt-6 mb-4 text-lg font-bold">Guest address</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name={`guest.${index}.address.state`}
          placeholder="State"
          className="border rounded p-2"
        />
        <input
          type="text"
          name={`guest.${index}.address.city`}
          placeholder="City"
          className="border rounded p-2"
        />
        <input
          type="text"
          name={`guest.${index}.address.street`}
          placeholder="Street"
          className="border rounded p-2"
        />
        <input
          type="text"
          name={`guest.${index}.address.houseNumber`}
          placeholder="House Number"
          className="border rounded p-2"
        />
        <input
          type="text"
          name={`guest.${index}.address.enterance`}
          placeholder="Entrance"
          className="border rounded p-2"
        />
        <input
          type="text"
          name={`guest.${index}.address.zip`}
          placeholder="Zip"
          className="border rounded p-2"
        />
      </div>
    </>
  );
}
