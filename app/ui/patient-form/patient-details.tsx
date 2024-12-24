export default function PatientDetails() {
  return (
    <div>
      <div>
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
        <input
          className="w-full border rounded p-2"
          id="facility"
          type="text"
          name="patient.facility"
          required
          placeholder="Facility"
        />
      </div>
    </div>
  );
}
