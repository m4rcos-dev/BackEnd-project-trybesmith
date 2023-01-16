import Joi from 'joi';
import { TProducts } from '../types';

export const NAME_STRING_EMPTY = 'message: "name" is required';
export const NAME_STRING_BASE = 'message: "name" must be a string';
export const NAME_STRING_MIN = 'message: "name" length must be at least 3 characters long';

const productsSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.empty': NAME_STRING_EMPTY,
    'string.base': NAME_STRING_BASE,
    'string.min': NAME_STRING_MIN,
  }),
  amount: Joi.string().min(2).required(),
});

const validateProducts = (product: TProducts) => {
  const { error } = productsSchema.validate(product);
  // console.log(error);
  if (error) return error?.details[0].message;
};

const validateUsers = () => {

};

export { validateProducts, validateUsers };
