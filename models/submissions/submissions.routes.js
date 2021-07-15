const SubmissionController = require("./submissions.controller");
const router = require("express").Router();

router.get("/doi/:doinumber", SubmissionController.getSubmissionByDoiNumber);
router.get("/author/:authorname", SubmissionController.getSubmissionsByAuthorName);

module.exports = router;
