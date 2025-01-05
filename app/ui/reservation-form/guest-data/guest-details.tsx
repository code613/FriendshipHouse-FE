import GuestAddress from "./guest-address";
import GuestDates from "./guest-dates";
import GuestPersonalData from "./guest-personal-data";

export default function GuestDetails({ index }: { index: number }) {
  return (
    <>
      <div className="p-4 bg-gray-50 rounded-md shadow-sm">
        <GuestPersonalData index={index} />
        <GuestAddress index={index} />
        <GuestDates index={index} />
      </div>
    </>
  );
}
