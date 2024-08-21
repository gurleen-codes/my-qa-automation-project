# QA Automation Project

This project automates the QA process for API testing using Postman and Newman. It also generates CSV reports from the test results.

## Project Structure
- `generate-csv.js`: A Node.js script to generate CSV reports from Newman JSON results.
- `testsuite_1.json`: The Postman collection used for regression testing.
- `prod.postman_environment.json`: The Postman environment file with production variables.
- `.github/workflows/ci.yml`: The GitHub Actions workflow file that automates the testing process.
- `README.md`: Documentation for the project.

### Prerequisites
Ensure that you have the following installed:
- [Node.js](https://nodejs.org/en/): This project requires Node.js to run JavaScript code and install dependencies.
- [Git](https://git-scm.com/): Git is used for version control, allowing you to clone the repository and manage code changes.

## How to Run the Tests
1. **Clone the repository**:
   ```bash
   git clone git@github.com:your-username/my-qa-automation-project.git
   cd my-qa-automation-project
2. **Install Dependencies**:
   ```bash
   npm install
   npm install -g newman
3. **Environment Variables**:
- The project uses a Postman environment file (prod.postman_environment.json) to manage environment-specific variables such as API base URLs and authentication tokens. Ensure that this file is configured correctly with your environment settings.

