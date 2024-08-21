# QA Automation Project

This project automates the QA process for API testing using Postman and Newman. It also generates CSV reports from the test results.

## Project Structure
- `generate-csv.js`: A Node.js script to generate CSV reports from Newman JSON results.
- `testsuite_1.json`: The Postman collection used for regression testing.
- `prod.postman_environment.json`: The Postman environment file with production variables.

## How to Run the Tests
1. **Install Dependencies**: Ensure you have [Node.js](https://nodejs.org/en/) installed.
2. **Run Newman**: 
   ```bash
   newman run testsuite_1.json -e prod.postman_environment.json -r json --reporter-json-export newman-results.json

