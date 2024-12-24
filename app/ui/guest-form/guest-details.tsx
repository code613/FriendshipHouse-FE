export default function GuestDetails() {
  return (
    <>
      <input
        type="text"
        name="guest.firstName"
        placeholder="Guest First Name"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.lastName"
        placeholder="Guest Last Name"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.relationship"
        placeholder="Relationship"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.gender"
        placeholder="Gender"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.cell"
        placeholder="Cell"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.email"
        placeholder="Email"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.address.street"
        placeholder="Street"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.address.houseNumber"
        placeholder="House Number"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.address.enterance"
        placeholder="Enterance"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.address.city"
        placeholder="City"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.address.state"
        placeholder="State"
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="guest.address.zip"
        placeholder="Zip"
        className="w-full border rounded p-2"
      />

      <h2 className="mt-4">Check-in Details</h2>
      <input
        type="date"
        name="checkInDate"
        className="w-full border rounded p-2"
      />
      <input
        type="date"
        name="checkOutDate"
        className="w-full border rounded p-2"
      />
    </>
  );
}
