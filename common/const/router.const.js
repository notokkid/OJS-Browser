const router = require('express').Router();
const issues = require('../../models/issues/issues.routes');

router.use('/issues', issues);

module.exports = router;