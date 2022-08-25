import * as sinon from 'sinon';
import chai from 'chai';
import CarController from '../../../controllers/Car.controller';
import Schema from '../../../models/Car.schema';

const { expect } = chai;
const carController = new CarController();

describe('Testes da camada Controller', () => {
  const carMock = {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2,
  };

  before(async () => {
    sinon
      .stub(Schema, 'create')
      .resolves(carMock);

    sinon
      .stub(Schema, 'findByIdAndDelete')
      .resolves(carMock as never);

    sinon
      .stub(Schema, 'findById')
      .resolves(carMock as never);
  });

  after(()=>{
    sinon.restore();
  })

  it('Teste 1 - verifica a rota create', async () => {
    const ferrariMock = {
      model: "Ferrari Maranello",
      year: 1963,
      color: "red",
      buyValue: 3500000,
      seatsQty: 2,
      doorsQty: 2,
    };
    const req = { body: ferrariMock };
    const res = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub }
    res.status = sinon.stub().returns(res); 
    const controllerResult = await carController.create(req as never, res as never);

    expect(controllerResult).to.deep.equal(carMock);
  });

  it('Teste 2 - verifica a rota delete', async () => {
    const req = { params: carMock._id };
    const res = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub }
    res.status = sinon.stub().returns(res); 
    const controllerResult = await carController.delete(req as never, res as never);

    expect(controllerResult).to.deep.equal(undefined);
  });

  it('Teste 3 - verifica a rota readOne', async () => {
    const req = { params: carMock._id };
    const res = { json: sinon.stub().callsFake((arg) => arg), status: sinon.stub }
    res.status = sinon.stub().returns(res); 
    const controllerResult = await carController.readOne(req as never, res as never);

    expect(controllerResult).to.deep.equal(carMock);
  });
});