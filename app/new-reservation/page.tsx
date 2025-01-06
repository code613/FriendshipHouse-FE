import { getFriendshipHouseLocations } from "../lib/actions";
import ReservationForm from "../ui/reservation-form/reservation-form";

export default async function NewReservation() {
  const locations = await getFriendshipHouseLocations();
  return (
    <>
      <div>New Reservation</div>
      <ReservationForm friendshipHouseLocations={locations} />
    </>
  );
}
