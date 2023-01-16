import { NextFunction, Request, Response } from 'express';
import { NAME_STRING_BASE,
  NAME_STRING_EMPTY,
  NAME_STRING_MIN,
  validateProducts } from '../utils/validateInputs';

const validProducts = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const valid = validateProducts(body);
  if (valid === NAME_STRING_EMPTY) return res.status(400).json(valid);
  if (valid === NAME_STRING_BASE || valid === NAME_STRING_MIN) return res.status(422).json(valid);

  next();
};

export default validProducts;
