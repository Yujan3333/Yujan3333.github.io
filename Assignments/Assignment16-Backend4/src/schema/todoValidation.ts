import Joi from "joi";

// for todo validations 
const todoReqQuery = Joi.object({
  id: Joi.number().required(),
});

const todoReqBody = Joi.object({
    task: Joi.string().required(),
  });

export { todoReqQuery, todoReqBody };