export default function PatientCondition() {
  return (
    <>
      <textarea
        className="w-full border rounded p-1 mb-2"
        id="condition"
        name="patient.condition"
        required
        placeholder="Reason for stay"
        rows={2}
      />
    </>
  );
}
