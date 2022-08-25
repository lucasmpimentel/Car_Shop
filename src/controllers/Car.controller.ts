import { Request, Response } from 'express';
import { IController } from '../interfaces/IController';
import CarService from '../services/Car.service';

const carService = new CarService();

export default class CarController implements IController {
  create = async (req: Request, res: Response): Promise<Response> => {
    const createCar = await carService.create(req.body);
    return res.status(201).json(createCar);
  };

  read = async (req: Request, res: Response): Promise<Response> => {
    const readCar = await carService.read();
    return res.status(200).json(readCar);
  };

  readOne = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const readOneCar = await carService.readOne(id);
    return res.status(200).json(readOneCar);
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const updateCar = await carService.update(id, req.body);
    return res.status(200).json(updateCar);
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await carService.delete(id);
    return res.status(204).json();
  };
}
