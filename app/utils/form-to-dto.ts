/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReservationDto } from "../dtos/reservation-dto";
import { getStateCode } from "./state-data";

export default function FormToDto(formData: FormData): ReservationDto {
  const result: ReservationDto = {};

  formData.forEach((value, key) => {
    if (key.startsWith("patient.")) {
      const field = key.split(".")[1];
      result.patient = result.patient || {};
      (result.patient as any)[field] = value;
    } else if (key.startsWith("friendshipHouseLocation")) {
      result.friendshipHouseLocation = value as string;
    } else if (key.startsWith("guest")) {
      const field = key.split(".")[2];
      const guestIndex = parseInt(key.split(".")[1]);
      result.guests = result.guests || [];
      result.guests[guestIndex] = result.guests[guestIndex] || {};
      if (field === "state") {
        (result.guests[guestIndex] as any)[field] = getStateCode(
          value as string
        );
      } else {
        (result.guests[guestIndex] as any)[field] = value;
      }
    }
  });

  return result;
}
