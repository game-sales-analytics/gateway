import Joi from 'joi';


const schema = Joi.object({
  startYear: Joi.string()
    .trim()
    .pattern(/^\d{4}$/)
    .required(),
  endYear: Joi.string()
    .trim()
    .pattern(/^\d{4}$/)
    .required(),
}).required();

export default schema;
