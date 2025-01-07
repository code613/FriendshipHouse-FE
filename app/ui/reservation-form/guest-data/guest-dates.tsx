import { useState } from "react";

export default function GuestDates({
  index,
  defaultCheckIn,
  defaultCheckOut,
}: {
  index: number;
  defaultCheckIn: string;
  defaultCheckOut: string;
}) {
  const [checkInDate, setCheckInDate] = useState(defaultCheckIn);
  const [checkOutDate, setCheckOutDate] = useState(defaultCheckOut);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h2 className="mt-6 mb-4 text-lg font-bold">Check-in</h2>
          <input
            type="date"
            name={`guest.${index}.checkInDate`}
            className="w-full border rounded p-2"
            required
            value={checkInDate}
            onChange={(e) => {
              setCheckInDate(e.target.value);
              setCheckOutDate("");
            }}
          />
        </div>
        <div>
          <h2 className="mt-6 mb-4 text-lg font-bold">Check-out</h2>
          <input
            type="date"
            name={`guest.${index}.checkOutDate`}
            className="w-full border rounded p-2"
            required
            min={checkInDate}
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
