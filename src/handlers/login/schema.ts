import Joi from 'joi';


const schema = Joi.object({
  password: Joi.string().trim(true).min(8, 'utf-8').required(),
  email: Joi.string()
    .trim(true)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  deviceUserAgent: Joi.string().trim().required(),
  ip: Joi.string().trim().ip({ version: 'ipv4' }).required(),
});

export default schema;
