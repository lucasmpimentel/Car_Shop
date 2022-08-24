import { Request } from 'express';
import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const carZodSchema = z.object({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
}).merge(vehicleZodSchema);

type ICar = z.infer<typeof carZodSchema>;

interface RequestCar extends Request {
  body: ICar,
}

export { ICar, carZodSchema, RequestCar };
