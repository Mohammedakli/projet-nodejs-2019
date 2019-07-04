const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  fname: joi.string().required(),
  lname :joi.string().required(),
  password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email({ minDomainSegments: 2 })

});

const updateModel = joi.object().keys({
  fname: joi.string(),
  lname:joi.string(),
  password: joi.string(),
  email: Joi.string().email({ minDomainSegments: 2 })
});

module.exports = {
  createModel,
  updateModel,
};

