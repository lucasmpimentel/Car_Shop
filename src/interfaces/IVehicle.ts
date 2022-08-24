import { Request } from 'express';
import { z } from 'zod';

const MIN_STRING_LENGTH = 3;
const MIN_VEHICLE_YEAR = 1900;
const MAX_VEHICLE_YEAR = 2022;

const vehicleZodSchema = z.object({
  model: z.string().min(MIN_STRING_LENGTH),
  year: z.number().min(MIN_VEHICLE_YEAR).max(MAX_VEHICLE_YEAR),
  color: z.string().min(MIN_STRING_LENGTH),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

type IVehicle = z.infer<typeof vehicleZodSchema>;

interface RequestVehicle extends Request {
  body: IVehicle,
}

export { IVehicle, vehicleZodSchema, RequestVehicle }; 