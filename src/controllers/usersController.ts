import { Request, Response } from 'express';
import usersService from '../services/usersService';

const login = async (req: Request, res: Response) => {
  const { body } = req;

  const { status, token, error } = await usersService.login(body);

  // try {
  //   res.status(status).json(token);
  // } catch (err) {
  //   res.status(status).json(error);
  // }

  return error ? res.status(status).json(error) : res.status(status).json({ token });
};

const createUser = async (req: Request, res: Response) => {
  const { body } = req;
  const token = await usersService.createUser(body);
  res.status(201).json({ token });
};

export default { login, createUser };
