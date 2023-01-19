import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const secret = 'xab';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const currentUser = jwt.verify(token, secret);
    req.body.currentUser = currentUser;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default auth;
