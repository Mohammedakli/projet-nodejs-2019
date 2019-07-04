const bcrypt = require('bcrypt');

module.exports = (data) => {
  return bcrypt.genSaltAsync(10).then((result) => {
    return bcrypt.hashAsync(data.password, result, null);
  });
};
