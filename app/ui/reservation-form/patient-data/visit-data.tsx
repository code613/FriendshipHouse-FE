import clsx from "clsx";
import { useState } from "react";
import Combobox from "react-widgets/Combobox";

export default function VisitData({
  recommendedFacilities,
}: {
  recommendedFacilities: string[] | undefined;
}) {
  const [visitType, setVisitType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const visitTypes = ["Inpatient", "Outpatient", "Observation"];

  return (
    <>
      <div className="flex mb-4 space-x-4">
        <select
          id="visitType"
          name="patient.visitType"
          value={visitType}
          required
          onChange={(e) => {
            setVisitType(e.target.value);
            setRoomNumber("");
          }}
          className={clsx(
            "w-full border rounded p-2",
            "invalid:text-gray-400",
            "valid:text-gray-900"
          )}
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

        <Combobox
          placeholder="Facility"
          data={recommendedFacilities}
          dataKey="place_id"
          name="patient.facility"
          id="facility"
          textField="description"
          style={{ border: "red" }}
          focusFirstItem={true}
          hideEmptyPopup
          hideCaret
          className="w-full border-none "
        />

        <input
          id="roomNumber"
          type="text"
          name="patient.roomNumber"
          required
          placeholder="Room Number"
          disabled={visitType !== "Inpatient"}
          onChange={(e) => setRoomNumber(e.target.value)}
          value={roomNumber}
          className={clsx("w-full border rounded p-2", "disabled:bg-gray-200")}
        />
      </div>
    </>
  );
}
