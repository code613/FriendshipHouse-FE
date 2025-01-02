import { lusitana } from "@/app/ui/fonts";

export default function PatientDetails() {
  return (
    <div>
      <h2 className={`${lusitana.className} mt-6 mb-4 text-lg font-bold`}>
        Patient details
      </h2>
      <div>
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
    </div>
  );
}
