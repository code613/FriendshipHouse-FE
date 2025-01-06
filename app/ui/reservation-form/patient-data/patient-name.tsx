export default function PatientName() {
  return (
    <>
      <div className="flex mb-4 space-x-4">
        <input
          className="w-full border rounded p-2"
          id="first_name"
          type="text"
          name="patient.firstName"
          required
          placeholder="First Name"
        />
        <input
          className="w-full border rounded p-2"
          id="last_name"
          type="text"
          name="patient.lastName"
          required
          placeholder="Last Name"
        />
      </div>
    </>
  );
}
