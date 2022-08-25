import { Request } from 'express';

export interface IRequest<T> extends Request{
  body: T,
}
