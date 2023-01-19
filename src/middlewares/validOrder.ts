import { NextFunction, Request, Response } from 'express';
import { creatOrderSchema } from '../utils/validateInputs';

const statusCheck = (type: string | undefined) => {
  let status = 400;
  if (type !== 'any.required') {
    status = 422;
  }
  return status;
};

const validOrder = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = creatOrderSchema.validate(body.productsIds);

  if (error) {
    const messageError = error?.details[0].message;
    const type = error?.details[0].type;
    const status = statusCheck(type);
    return res.status(status).json({ message: messageError });
  }

  next();
};

export default validOrder;
