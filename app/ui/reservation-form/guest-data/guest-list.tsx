import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@/app/ui/button";
import { lusitana } from "@/app/ui/fonts";
import GuestDetails from "./guest-details";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DeleteGuestButton from "./delete-guest-button";

export default function GuestList() {

  const [guests, setGuests] = useState<{ id: string }[]>([]);

  const addGuest = () => {
    setGuests((prev) => [...prev, { id: uuidv4() }]);
  };

  const deleteGuest = (id: string) => {
    setGuests((prev) => prev.filter((guest) => guest.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") deleteGuest(id);
  };

  useEffect(() => {
    console.log("GuestList mounted");
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
            onPress={() => {
              console.log("AccordionItem pressed:");
            }}
            key={guest.id}
            keepContentMounted={true}
            className="border-b border-gray-300"
            textValue="Guest"
            title={
              <div className="flex items-center justify-between text-sm space-x-8">
                <span className="bg-blue-500 text-white rounded-full px-3 py-1 text-xs">
                  {index == 0 ? "Main Guest" : `Guest ${index + 1}`}
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
            <GuestDetails index={index}/>
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
