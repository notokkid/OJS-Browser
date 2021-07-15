const fetch = require("node-fetch");

class SubmissionService {
  /**
   * Retrieves a single submission based on its unique DOI number.
   */
  static fetchSubmissionByDoi(doiNumber) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3000/submissions?doi=${doiNumber}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.length <= 0) {
            reject({
              message: "No submission with such DOI number found.",
            });
          }
          resolve(res);
        })
        .catch((error) => reject(error));
    });
  }

  static fetchSubmissionsByAuthorName(fullName) {
    return new Promise((resolve, reject) => {
      const data = [];
      fetch("http://localhost:3000/submissions")
        .then((res) => res.json())
        .then((submissions) => {
          submissions.forEach((submission) => {
            submission.authors.forEach((author) => {
              if (author.fullName.toLowerCase() === fullName.toLowerCase()) {
                data.push(submission);
              }
            });
          });
          resolve(data);
        })
        .catch((error) => reject(error));
    });
  }
}

module.exports = SubmissionService;
