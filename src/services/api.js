const { Router } = require('express');
const listsRouter = require('../modules/lists/router');
const tasksRouter = require('../modules/tasks/router');
const authRouter = require('../modules/Authentication/router');

const router = new Router();

// Service  API
router.use('/api', listsRouter);
router.use('/api', tasksRouter);
router.use('/api', authRouter);
// End of service API

module.exports = router;
