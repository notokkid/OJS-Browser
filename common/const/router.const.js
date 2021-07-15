const router = require('express').Router();
const issues = require('../../models/issues/issues.routes');
const submissions = require("../../models/submissions/submissions.routes");

router.use('/issues', issues);
router.use('/submissions', submissions);
// router.use('/users', users);

module.exports = router;