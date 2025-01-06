import clsx from "clsx";
import { useState } from "react";

export default function VisitData() {
  const [visitType, setVisitType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const visitTypes = ["Inpatient", "Outpatient", "Observation"];

  return (
    <>
      <div className="flex mb-4 space-x-4">
        <select
          id="visitType"
          name="patient.visitType"
          className={clsx(
            "block w-full border rounded p-2",
            "invalid:text-gray-400",
            "valid:text-gray-900"
          )}
          value={visitType}
          required
          onChange={(e) => {
            setVisitType(e.target.value);
            setRoomNumber("");
          }}
        >
          <option value="" defaultValue={""} disabled hidden>
            Visit type
          </option>
          {visitTypes.map((type) => (
            <option key={type} value={type} className="text-gray-900">
              {type}
            </option>
          ))}
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
          className={clsx("w-full border rounded p-2", "disabled:bg-gray-200")}
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
    </>
  );
}
