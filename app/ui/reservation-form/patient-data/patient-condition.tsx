export default function PatientCondition() {
  return (
    <>
      <textarea
        className="w-full border rounded p-1"
        id="condition"
        name="patient.condition"
        required
        placeholder="Condition"
        rows={2}
      />
    </>
  );
}
