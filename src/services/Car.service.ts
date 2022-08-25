import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';
import CarModel from '../models/Car.model';
import CustomError from '../utils/CustomError';

const carModel = new CarModel();
const errorMessage = 'Object not found';

export default class CarService implements IService <ICar> {
  create = async (obj: ICar): Promise<ICar> => carModel.create(obj);

  read = async (): Promise<ICar[]> => carModel.read();

  readOne = async (arg: string): Promise<ICar> => {
    const carRead = await carModel.readOne(arg);
    if (carRead === null) {
      throw new CustomError(404, errorMessage);
    }
    return carRead;
  };

  update = async (arg: string, obj: ICar): Promise<ICar> => {
    const carUpdate = await carModel.update(arg, obj);
    if (carUpdate === null) {
      throw new CustomError(404, errorMessage);
    }
    return carUpdate;
  };

  delete = async (arg: string): Promise<ICar> => {
    const carDelete = await carModel.delete(arg);
    if (carDelete === null) {
      throw new CustomError(404, errorMessage);
    }
    return carDelete;
  };
}