const { createModel } = require('../../lists/model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');




module.exports = (CreateUser) => {

  return createModel.validate(CreateUser)

  .then(connect)
  .then(db => db.collection(collections.AUTH))
  .then((FindOne({ email: req.body.email })))
  .then(collection => collection.insertOne(CreateUser))
  .then(dbResponse => dbResponse.ops[0])
}





