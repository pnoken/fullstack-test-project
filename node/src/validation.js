//VALIDATION
const Joi = require("@hapi/joi");

//Register Validation
const registerValidation = (data) => {
  const schema = {
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    username: Joi.string().alphanum().min(5).max(30).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    age: Joi.number().required()
  };
  return Joi.validate(data, schema);
};

//Login Validation
const loginValidation = (data) => {
  const schema = {
    //username: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
