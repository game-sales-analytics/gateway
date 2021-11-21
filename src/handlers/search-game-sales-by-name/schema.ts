import Joi from 'joi';


const MAX_LENGTH = 256;

const schema = Joi.object({
  name: Joi.string().min(3).max(MAX_LENGTH).required(),
}).required();

export default schema;
