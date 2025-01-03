import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { MdExpandMore, MdKeyboardArrowLeft } from "react-icons/md";
import { Button } from "@/app/ui/button";
import { lusitana } from "@/app/ui/fonts";
import GuestDetails from "./guest-details";
import clsx from "clsx";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DeleteGuestButton from "./delete-guest-button";

export default function GuestList() {
  const [guests, setGuests] = useState([{ id: uuidv4() }]);

  const addGuest = () => {
    setGuests((prev) => [...prev, { id: uuidv4() }]);
  };

  const deleteGuest = (id: string) => {
    setGuests((prev) => prev.filter((guest) => guest.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") deleteGuest(id);
  };

  const renderIndicator = (isOpen: boolean) =>
    isOpen ? <MdExpandMore /> : <MdKeyboardArrowLeft />;

  return (
    <div>
      <h2 className={clsx(lusitana.className, "mt-6 mb-4 text-lg font-bold")}>
        Guests details
      </h2>
      <Accordion showDivider={true}>
        {guests.map((guest, index) => (
          <AccordionItem
            key={guest.id}
            keepContentMounted={true}
            textValue="Guest"
            className="p-2 mb-2"
            indicator={({ isOpen = false }) => renderIndicator(isOpen)}
            title={
              <div className="flex items-center justify-between text-sm space-x-8">
                <span className="bg-blue-500 text-white rounded-full px-3 py-1 text-xs">
                  Guest {index + 1}
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
