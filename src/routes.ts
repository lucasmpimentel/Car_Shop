import express from 'express';
import { idValidation, carValidation } from './middlewares/cars.validation';
import CarController from './controllers/Car.controller';

const car = new CarController();
const routes = express.Router();

routes.route('/cars')
  .get(car.read)
  .post(carValidation, car.create);

routes.route('/cars/:id')
  .get(idValidation, car.readOne)
  .put(idValidation, carValidation, car.update)
  .delete(idValidation, car.delete);

export default routes;
