const fetch = require("node-fetch");
class IssuesService {
  /**
   * Get a list of issues. Returns an array.
   */
  static fetchAllIssues() {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3000/issues")
        .then((res) => res.json())
        .then((res) => {
          resolve(res);
        })
        .catch((error) => reject(error));
    });
  }
  /**
   * Get a single issue via the issue ID.
   */
  static fetchIssueById(id) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/issues/${id}`)
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => reject(error));
    })
  }
}

module.exports = IssuesService;