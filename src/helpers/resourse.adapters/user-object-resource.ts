import { IUser } from '../../interfaces';

export const userObjectResource = (mongoObject: IUser) => ({
  // eslint-disable-next-line no-underscore-dangle
  id: mongoObject._id.toString(),
  name: mongoObject.name,
  surname: mongoObject.surname,
  email: mongoObject.email,
  phone: mongoObject.phone,
  dateOfBirth: mongoObject.dateOfBirth.toString(),
  status: mongoObject.status,
  role: mongoObject.role,
  bikes: mongoObject.bikes,
  createdAt: mongoObject.createdAt.toString(),
});
