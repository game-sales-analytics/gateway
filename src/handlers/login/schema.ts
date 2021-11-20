import Joi from 'joi';


const schema = Joi.object({
  password: Joi.string().min(1).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  deviceUserAgent: Joi.string().required(),
  ip: Joi.string().ip({ version: 'ipv4' }).required()
});

export default schema;
