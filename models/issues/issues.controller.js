const IssuesService = require("./issues.service");

class IssuesController {
  /**
   * Controller class. Used to redirect to the service method that gets all the Issues from the API.
   */
  static async getAllIssues(req, res, next) {
    try {
      const issues = await IssuesService.fetchAllIssues();
      res.status(200).json(issues);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = IssuesController;