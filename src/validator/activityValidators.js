import Joi from 'joi';

export const createActivitySchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string().optional(),
  dateTime: Joi.date().optional() 
});
