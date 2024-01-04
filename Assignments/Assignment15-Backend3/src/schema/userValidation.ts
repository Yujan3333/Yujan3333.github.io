import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),

  password: Joi.string().min(2).required(),
});

const signupSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    username: Joi.string().required(),
    password: Joi.string().min(2).required(),
  });

export { loginSchema, signupSchema };