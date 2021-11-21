import Joi from 'joi';


const GAME_ID_LENGTH = 32;
const MAX_NUMBER_OF_IDS = 20;

export const initialSchema = Joi.object({
  ids: Joi.string()
    .trim()
    .max(GAME_ID_LENGTH * MAX_NUMBER_OF_IDS + MAX_NUMBER_OF_IDS - 1)
    .min(GAME_ID_LENGTH)
    .required(),
}).required();


export const finalSchema = Joi.array()
  .items(
    Joi.string()
      .trim()
      .length(GAME_ID_LENGTH)
      .required(),
  )
  .min(1)
  .max(MAX_NUMBER_OF_IDS)
  .required();
