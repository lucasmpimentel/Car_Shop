import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import carMongoose from './Car.schema';

export default class CarModel implements IModel <ICar> {
  create = async (obj: ICar): Promise<ICar> => carMongoose.create(obj);

  read = async (): Promise<ICar[]> => carMongoose.find();

  readOne = async (arg: string): Promise<ICar | null> => carMongoose
    .findById(arg);

  update = async (arg: string, obj: ICar): Promise<ICar | null> => carMongoose
    .findByIdAndUpdate(arg, obj, { returnOriginal: false });

  delete = async (arg: string): Promise<ICar | null> => carMongoose
    .findByIdAndDelete(arg);
}
