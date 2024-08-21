const fs = require('fs');

// Read the Newman results JSON file
const rawdata = fs.readFileSync('newman-results-001.json');
const results = JSON.parse(rawdata);

// Extract relevant information
const summaryData = results.run.executions.map((execution) => {
  return {
    'Request Name': execution.item.name,
    'Status': execution.response.status,
    'Response Time (ms)': execution.response.responseTime,
    // Add more fields as needed
  };
});

// Convert the summary data to CSV format
const csv = 'Request Name,Status,Response Time (ms)\n' +
  summaryData.map(row => Object.values(row).join(',')).join('\n');

// Write the CSV file
fs.writeFileSync('summary_results_001.csv', csv);

console.log('CSV file generated successfully.');
