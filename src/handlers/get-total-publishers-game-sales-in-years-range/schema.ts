import Joi from 'joi';


const PUBLISHER_MAX_LENGTH = 256;
const MAX_PUBLISHERS = 10;

const schema = Joi.object({
  startYear: Joi.string()
    .trim()
    .pattern(/^\d{4}$/)
    .required(),
  endYear: Joi.string()
    .trim()
    .pattern(/^\d{4}$/)
    .required(),
  publisherIds: Joi.array()
    .items(
      Joi.string()
        .trim()
        .max(PUBLISHER_MAX_LENGTH)
        .required(),
    )
    .min(1)
    .max(MAX_PUBLISHERS)
    .required(),
}).required();

export default schema;
