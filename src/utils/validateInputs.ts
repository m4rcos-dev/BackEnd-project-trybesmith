import Joi from 'joi';

const NAME_STRING_EMPTY = '"name" is required';
const NAME_STRING_BASE = '"name" must be a string';
const NAME_STRING_MIN = '"name" length must be at least 3 characters long';

const AMOUNT_STRING_EMPTY = '"amount" is required';
const AMOUNT_STRING_BASE = '"amount" must be a string';
const AMOUNT_STRING_MIN = '"amount" length must be at least 3 characters long';

const nameSchema = Joi.string().min(3).required().messages({
  'any.required': NAME_STRING_EMPTY,
  'string.base': NAME_STRING_BASE,
  'string.min': NAME_STRING_MIN,
});

const amountSchema = Joi.string().min(3).required().messages({
  'any.required': AMOUNT_STRING_EMPTY,
  'string.base': AMOUNT_STRING_BASE,
  'string.min': AMOUNT_STRING_MIN,
});

const productsSchema = Joi.object({
  name: nameSchema,
  amount: amountSchema,
});

export default productsSchema;
