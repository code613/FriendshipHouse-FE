import { z } from "zod";

export const FormSchema = z.object({
    friendshipHouseLocation: z.string(),
    patient: z.object({
      firstName: z.string(),
      lastName: z.string(),
      facility: z.string(),
      condition: z.string(),
      visitType: z.enum(["Inpatient", "Outpatient", "Observation"]),
      roomNumber: z.string().optional(),
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
          state: z.string(),
          city: z.string(),
          street: z.string(),
          houseNumber: z.string(),
          entrance: z.string().optional(),
          zip: z.string(),
          checkInDate: z.string(),
          checkOutDate: z.string(),
        })
      )
      .min(1),
  });