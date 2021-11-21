import Joi from 'joi';


const schema = Joi.object({
  n: Joi.string()
    .trim()
    .pattern(/^\d{1,20}$/)
    .required(),
}).required();

export default schema;
