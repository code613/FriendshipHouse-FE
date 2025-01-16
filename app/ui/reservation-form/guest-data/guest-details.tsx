import DragAndDrop from "../drag-and-drop";
import { DefaultGuestData } from "./default-guest-data";
import GuestAddress from "./guest-address";
import GuestContactData from "./guest-contact-data";
import GuestDates from "./guest-dates";
import GuestPersonalData from "./guest-personal-data";

export default function GuestDetails({
  index,
  defaultGuestData,
}: {
  index: number;
  defaultGuestData: DefaultGuestData;
}) {
  return (
    <>
      <div className="p-4 bg-gray-50 rounded-md shadow-sm">
        <GuestPersonalData index={index} />
        <GuestContactData
          index={index}
          defaultPhone={defaultGuestData.phone || ""}
          defaultEmail={defaultGuestData.email || ""}
        />
        <GuestAddress
          index={index}
          defaultCountry={defaultGuestData.country || ""}
          defaultState={defaultGuestData.state || ""}
          defaultCity={defaultGuestData.city || ""}
          defaultStreet={defaultGuestData.street || ""}
          defaultHouseNumber={defaultGuestData.houseNumber || ""}
          defaultZip={defaultGuestData.zip || ""}
        />
        <GuestDates
          index={index}
          defaultCheckIn={defaultGuestData.checkIn || ""}
          defaultCheckOut={defaultGuestData.checkOut || ""}
        />
        <DragAndDrop name={`guest.${index}.photoId`} wantedFile="photo id"/>
      </div>
    </>
  );
}
