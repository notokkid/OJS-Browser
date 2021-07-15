const SubmissionService = require("./submissions.service");

class SubmissionController {
  /**
   * Controller method. Connects to the Service method that retrieves an submission by its DOI number.
   */
  static async getSubmissionByDoiNumber(req, res) {
    const doiNumber = req.params.doinumber;
    try {
      const submission = await SubmissionService.fetchSubmissionByDoi(
        doiNumber
      );
      res.status(200).json(submission);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  /**
   * Controller method. Connects to the service method that retrieves all submissions authored by a single requested author.
   * Requires the full name of the author
   */

  static async getSubmissionsByAuthorName(req, res) {
    const authorNameParam = req.params.authorname;
    const fullName = authorNameParam.replace("_", " ");
    try {
      const submissions = await SubmissionService.fetchSubmissionsByAuthorName(
        fullName
      );
      res.status(200).json(submissions);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = SubmissionController;
