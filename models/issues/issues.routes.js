const router = require('express').Router();
const IssuesController = require('./issues.controller');

router.get('/', IssuesController.getAllIssues);
router.get('/:id', IssuesController.getIssueById);

module.exports = router;