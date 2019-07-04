const joi = require('@hapi/joi');

const User = joi.object().keys({
  fname: joi.string().required(),
  lname: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().email({ minDomainSegments: 2 }).required(),
});

function validateUser(user) {
  const schema = {
    fname: joi.string().required(),
    lname: joi.string().required(),
    password: joi.string().required(),
    email: joi.string().required().email({ minDomainSegments: 2 }),
  };
  return joi.validate(user, schema);
}


exports.User = User;
exports.validate = validateUser;
