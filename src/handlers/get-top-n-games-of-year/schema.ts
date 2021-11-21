import Joi from 'joi';


const schema = Joi.object({
  n: Joi.string()
    .trim()
    .pattern(/^\d{1,20}$/)
    .required(),
  year: Joi.string()
    .trim()
    .pattern(/^\d{4}$/)
    .required(),
}).required();

export default schema;
