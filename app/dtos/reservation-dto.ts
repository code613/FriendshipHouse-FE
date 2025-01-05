import { Patient } from "../interfaces/patient";
import { Guest } from "../interfaces/guest";

export interface ReservationDto {
  friendshipHouseLocation?: string;
  patient?: Patient;
  guests?: Guest[];
}