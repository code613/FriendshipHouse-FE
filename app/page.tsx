import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link className="text-red-500" href="/new-reservation">
        Go to New Reservation
      </Link>
    </>
  );
}
