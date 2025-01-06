import { lusitana } from "@/app/ui/fonts";
import PatientName from "./patient-name";
import VisitData from "./visit-data";
import PatientCondition from "./patient-condition";

export default function PatientDetails() {
  return (
    <div>
      <h2 className={`${lusitana.className} mt-6 mb-4 text-lg font-bold`}>
        Patient details
      </h2>
      <div>
        <PatientName />
        <VisitData />
        <PatientCondition />
      </div>
    </div>
  );
}
