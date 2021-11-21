import Joi from 'joi';


const NAME_MAX_LENGTH = 16;

const schema = Joi.object({
  n: Joi.string()
    .trim()
    .pattern(/^\d{1,20}$/)
    .required(),
  genre: Joi.string()
    .trim()
    .min(2)
    .max(NAME_MAX_LENGTH)
    .required(),
}).required();

export default schema;
