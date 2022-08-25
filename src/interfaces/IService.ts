export interface IService <T> {
  create(obj: T): Promise <T>,
  read(): Promise <T[]>,
  readOne(arg: string): Promise <T>, 
  update(arg: string, obj: T): Promise <T>,
  delete(arg: string): Promise <T>,
}
