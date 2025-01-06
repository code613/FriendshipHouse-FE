import { useState } from "react";
import { lusitana } from "@/app/ui/fonts";

export default function PatientDetails() {
  const [visitType, setVisitType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

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
        </div>
        <div className="flex mb-4 space-x-4">
          <select
            id="visitType"
            name="patient.visitType"
            className="block w-full border rounded p-2"
            value={visitType}
            required
            onChange={(e) => {
              setVisitType(e.target.value);
              setRoomNumber("");
            }}
          >
            <option value="" defaultValue={"Visit type"} disabled>
              Visit type
            </option>
            <option value="Inpatient">Inpatient</option>
            <option value="Outpatient">Outpatient</option>
            <option value="Observation">Observation</option>
          </select>
          <input
            className="w-full border rounded p-2"
            id="facility"
            type="text"
            name="patient.facility"
            required
            placeholder="Facility"
          />
          <input
            className="w-full border rounded p-2"
            id="roomNumber"
            type="text"
            name="patient.roomNumber"
            required
            placeholder="Room Number"
            disabled={visitType !== "Inpatient"}
            onChange={(e) => setRoomNumber(e.target.value)}
            value={roomNumber}
          />
        </div>
        <textarea
          className="w-full border rounded p-1"
          id="condition"
          name="patient.condition"
          required
          placeholder="Condition"
          rows={2}
        />
      </div>
    </div>
  );
}
