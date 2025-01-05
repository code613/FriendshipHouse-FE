"use server";

import FormToDto from "@/app/utils/form-to-dto";
import { FormSchema } from "@/app/schemas/form-schema";
import { ReservationDto } from "../dtos/reservation-dto";

export async function submitReservation(
  state: void | undefined,
  payload: FormData
): Promise<void | undefined> {
  const reservationDto = FormToDto(payload);
  console.log("Result:", JSON.stringify(reservationDto, null, 2));
  FormSchema.parse(reservationDto);

  const apiUrl = process.env.PATIENTS_API;
  if (!apiUrl) {
    throw new Error("PATIENTS_API environment variable is not defined.");
  }

  try {
    const data = await postToApi(apiUrl, reservationDto);
    console.log("API Response:", JSON.stringify(data));
  } catch (error) {
    console.error("Error submitting reservation:", error);
    throw error;
  }
}

async function postToApi(apiUrl: string, reservationDto: ReservationDto) {
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservationDto),
  });
  if (!response.ok) {
    throw new Error("Failed to submit patient details.");
  }

  return response.json();
}
