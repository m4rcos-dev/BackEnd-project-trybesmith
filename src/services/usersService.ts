import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';
import { TLogin, TUsers } from '../types';

const secret = 'xab';

const generateToken = (user: TUsers) => {
  const payload = { id: user.id, username: user.username };
  return jwt.sign(payload, secret, { algorithm: 'HS256', expiresIn: '1d' });
};

const login = async (loginBody: TLogin) => {
  const user = await usersModel.getByUsername(loginBody.username);

  if (!user || user.password !== loginBody.password) {
    return { status: 401, error: { message: 'Username or password invalid' } };
  }

  const token = generateToken(user);
  return { status: 200, token };
};

const createUser = async (userBody: TUsers) => {
  const user = await usersModel.createUser(userBody);

  const token = generateToken(user);
  return token;
};

export default { login, createUser };
