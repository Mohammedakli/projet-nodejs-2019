const { Router } = require('express');
const user = require('./middleware/user')

const router = new Router();


router.route('/auth')
  .post(user)

module.exports = router;
