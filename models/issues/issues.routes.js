const router = require('express').Router();
const IssuesController = require('./issues.controller');

router.get('/', IssuesController.getAllIssues);

module.exports = router;