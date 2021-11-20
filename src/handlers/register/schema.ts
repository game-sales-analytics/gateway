import Joi from 'joi';


const schema = Joi.object({
  firstName: Joi.string().trim(true).required(),
  lastName: Joi.string().trim(true).required(),
  password: Joi.string().trim(true).min(8, 'utf-8').required(),
  passwordConfirmation: Joi.ref('password'),
  email: Joi.string()
    .trim(true)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
})
  .with('password', 'passwordConfirmation')
  .required();

export default schema;
