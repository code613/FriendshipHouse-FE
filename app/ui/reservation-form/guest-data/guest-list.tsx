import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@/app/ui/button";
import { lusitana } from "@/app/ui/fonts";
import GuestDetails from "./guest-details";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DeleteGuestButton from "./delete-guest-button";
import { DefaultGuestData } from "./default-guest-data";

export default function GuestList() {
  const [guests, setGuests] = useState<{ id: string }[]>([]);
  const [defaultGuestData, setDefualtGuestData] = useState<DefaultGuestData>({
    phone: "",
    email: "",
    state: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    checkIn: "",
    checkOut: "",
  });

  const addGuest = () => {
    const form = document.getElementById(
      "reservation-form"
    ) as HTMLFormElement | null;
    if (form) {
      const formData = new FormData(form);
      const phone = formData.get("guest.0.cell")?.toString();
      const email = formData.get("guest.0.email")?.toString();
      const country = formData.get("guest.0.country")?.toString();
      const state = formData.get("guest.0.state")?.toString();
      const city = formData.get("guest.0.city")?.toString();
      const street = formData.get("guest.0.street")?.toString();
      const houseNumber = formData.get("guest.0.houseNumber")?.toString();
      const zip = formData.get("guest.0.zip")?.toString();
      const checkIn = formData.get("guest.0.checkInDate")?.toString();
      const checkOut = formData.get("guest.0.checkOutDate")?.toString();

      setDefualtGuestData({
        phone: phone,
        email: email,
        country: country,
        state: state,
        city: city,
        street: street,
        houseNumber: houseNumber,
        zip: zip,
        checkIn: checkIn,
        checkOut: checkOut,
      });
    }
    setGuests((prev) => [...prev, { id: uuidv4() }]);
  };

  const deleteGuest = (id: string) => {
    setGuests((prev) => prev.filter((guest) => guest.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") deleteGuest(id);
  };

  useEffect(() => {
    addGuest();
  }, []);

  return (
    <div>
      <h2 className={clsx(lusitana.className, "mt-6 mb-4 text-lg font-bold")}>
        Guests details
      </h2>
      <Accordion>
        {guests.map((guest, index) => (
          <AccordionItem
            key={guest.id}
            keepContentMounted={true}
            className="border-b border-gray-300"
            textValue="Guest"
            title={
              <div className="flex items-center justify-between text-sm space-x-8">
                <span className="bg-blue-500 text-white rounded-full px-3 py-1 text-xs">
                  {index === 0 ? "Main Guest" : `Guest ${index + 1}`}
                </span>
                {index > 0 && (
                  <DeleteGuestButton
                    deleteGuest={() => deleteGuest(guest.id)}
                    handleKeyDown={(e) => handleKeyDown(e, guest.id)}
                  />
                )}
              </div>
            }
          >
            <GuestDetails index={index} defaultGuestData={defaultGuestData} />
          </AccordionItem>
        ))}
      </Accordion>

      <Button
        onClick={addGuest}
        type="button"
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Add Guest
      </Button>
    </div>
  );
}
