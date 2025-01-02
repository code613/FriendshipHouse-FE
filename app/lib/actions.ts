/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { z } from "zod";

interface VisitType {
  type?: string;
  room?: string;
}

interface Patient {
  firstName?: string;
  lastName?: string;
  facility?: string;
  patientCondition?: string;
  visitType?: VisitType;
}

interface Address {
  street?: string;
  houseNumber?: string;
  enterance?: string;
  city?: string;
  state?: string;
  zip?: string;
}

interface CheckInDetails {
  checkInDate?: string;
  checkOutDate?: string;
}

interface Guest {
  firstName?: string;
  lastName?: string;
  relationship?: string;
  gender?: string;
  cell?: string;
  email?: string;
  address?: Address;
  checkInDetails?: CheckInDetails;
}

interface TransformedData {
  friendshipHouseLocation?: string;
  patient?: Patient;
  guests?: Guest[];
}

function transformFormData(formData: FormData): TransformedData {
  const result: TransformedData = {};
  // const guests: Guest[] = [];

  formData.forEach((value, key) => {
    if (key.startsWith("patient.")) {
      // Handle patient data
      const field = key.split(".")[1];
      result.patient = result.patient || {};
      (result.patient as any)[field] = value;
    } else if (key.startsWith("friendshipHouseLocation")) {
      // Handle friendship house location
      result.friendshipHouseLocation = value as string;
    } else if (key.startsWith("guest")) {
      // Handle guest data
      const isAddress = key.split(".")[2] == "address";
      const field = isAddress ? key.split(".")[3] : key.split(".")[2];
      const guestIndex = parseInt(key.split(".")[1]);
      result.guests = result.guests || [];
      result.guests[guestIndex] = result.guests[guestIndex] || {};
      if (isAddress) {
        result.guests[guestIndex].address =
          result.guests[guestIndex].address || {};
        (result.guests[guestIndex].address as any)[field] = value;
      } else {
        (result.guests[guestIndex] as any)[field] = value;
      }
    }
  });

  return result;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FormSchema = z.object({
  friendshipHouseLocation: z.string(),
  patient: z.object({
    firstName: z.string(),
    lastName: z.string(),
    facility: z.string(),
    patientCondition: z.string().optional(),
    visitType: z
      .object({
        type: z.string().optional(),
        room: z.string().optional(),
      })
      .optional(),
  }),
  guests: z
    .array(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        relationship: z.string(),
        gender: z.enum(["Male", "Female"]),
        cell: z.string(),
        email: z.string().email(),
        address: z.object({
          state: z.string(),
          city: z.string(),
          street: z.string(),
          housenumber: z.string(),
          entrance: z.string().optional(),
          zip: z.string(),
        }),
        checkInDetails: z.object({
          checkInDate: z.string(),
          checkOutDate: z.string(),
        }),
      })
    )
    .min(1),
});

export async function submitReservation(
  state: void | undefined,
  payload: FormData
): Promise<void | undefined> {
  const transformedData = transformFormData(payload);
  //FormSchema.parse(transformedData);
  console.log(console.log("Result:", JSON.stringify(transformedData, null, 2)));

  // const apiUrl = process.env.PATIENTS_API;
  // if (!apiUrl) {
  //   throw new Error("PATIENTS_API environment variable is not defined.");
  // }
  // const response = await fetch(apiUrl, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ firstName: first_name, lastName: last_name }),
  // });
  // if (!response.ok) {
  //   throw new Error("Failed to submit patient details.");
  // }
}
