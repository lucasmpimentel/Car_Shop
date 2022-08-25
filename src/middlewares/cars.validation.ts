import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import CustomError from '../utils/CustomError';

const reqSchema = Joi.object({
  model: Joi.string().min(3).required(),
  year: Joi.number().min(1900).max(2022).required(),
  color: Joi.string().min(3).required(),
  status: Joi.boolean(),
  buyValue: Joi.number().min(1).integer().required(),
  doorsQty: Joi.number().min(2).max(4).required(),
  seatsQty: Joi.number().min(2).max(7).required(),
});

const idSchema = Joi.object({
  id: Joi.string().min(24).required(),
});

const carValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = reqSchema.validate(req.body);

  if (error) throw new CustomError(400, 'Invalid Requisition!');
  next();
};

const idValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = idSchema.validate(req.params);

  if (error) {
    throw new CustomError(400, 'Id must have 24 hexadecimal characters');
  }
  next();
};

export { idValidation, carValidation };
