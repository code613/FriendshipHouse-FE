"use server";
import axios from "axios";

import { ReservationDto } from "../dtos/reservation-dto";
import { FriendshipHouseLocation } from "../interfaces/frienship-house-location";
import { FormSchema } from "../schemas/form-schema";
import FormToDto from "../utils/form-to-dto";

export async function getFriendshipHouseLocations(): Promise<
  FriendshipHouseLocation[]
> {
  try {
    const data = await fetch(process.env.FRIENDSHIP_HOUSE_LOCATIONS_API!);
    if (!data.ok) {
      throw new Error("Failed to get Friendship House locations.");
    }

    return await data.json();
  } catch (error) {
    console.error("Error getting Friendship House locations:", error);
    throw error;
  }
}

export async function submitReservation(
  state: void | undefined,
  payload: FormData
): Promise<void | undefined> {
  console.log(payload);
  const reservationDto = FormToDto(payload);
  console.log("Result:", JSON.stringify(reservationDto, null, 2));
  FormSchema.parse(reservationDto);

  const outboundFormData = new FormData();

  const jsonBlob = new Blob([JSON.stringify(reservationDto)], {
    type: "application/json",
  });

  outboundFormData.append("request", jsonBlob);

  const proofOfStay = payload.get("proofOfStay") as File | null;
  if (proofOfStay) {
    outboundFormData.append("patientFile", proofOfStay);
  }

  const guestFiles: File[] = [];

  for (let i = 0; payload.has(`guest.${i}.photoId`); i++) {
    const guestPhotoId = payload.get(`guest.${i}.photoId`) as File | null;
    if (guestPhotoId) {
      guestFiles.push(guestPhotoId);
    }
  }

  guestFiles.forEach((file) => {
    outboundFormData.append("guestFiles", file);
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: process.env.PATIENTS_API,
    data: outboundFormData,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
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
