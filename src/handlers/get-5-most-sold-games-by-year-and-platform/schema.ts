import Joi from 'joi';


const PLATFORM_MAX_LENGTH = 16;

const schema = Joi.object({
  year: Joi.string()
    .trim()
    .pattern(/^\d{4}$/)
    .required(),
  platform: Joi.string()
    .trim()
    .min(2)
    .max(PLATFORM_MAX_LENGTH)
    .required(),
}).required();

export default schema;
