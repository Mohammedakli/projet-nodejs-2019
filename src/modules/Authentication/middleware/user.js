const user = require('../services/user')


module.exports = (req, res) => {
  const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
}
