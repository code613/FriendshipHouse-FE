import Link from "next/link";

export default function ReservationConfirmation() {
  return (
    <>
      <div>Your reservation has been confirmed</div>
      <Link className="text-red-500" href="./">Home</Link>
    </>
  );
}
