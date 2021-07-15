const IssuesService = require("./issues.service");

class IssuesController {
  /**
   * Controller method. Used to redirect to the service method that gets all the Issues from the API.
   */
  static async getAllIssues(req, res, next) {
    try {
      const issues = await IssuesService.fetchAllIssues();
      res.status(200).json(issues);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  /**
   * Controller method. Used to redirect to the service method that gets a single Issue from the API, by ID.
   */

  static async getIssueById(req, res, next) {
    const id = req.params.id;
    try {
      const issue = await IssuesService.fetchIssueById(id);
      res.status(200).json(issue);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = IssuesController;
