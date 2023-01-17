import { NextFunction, Request, Response } from 'express';
import { usersSchema } from '../utils/validateInputs';

const statusCheck = (type: string | undefined) => {
  let status = 400;
  if (type !== 'any.required') {
    status = 422;
  }
  return status;
};

const validUsers = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = usersSchema.validate(body);

  // console.log(error);
  if (error) {
    const messageError = error?.details[0].message;
    const type = error?.details[0].type;
    const status = statusCheck(type);
    return res.status(status).json({ message: messageError });
  }

  next();
};

export default validUsers;
