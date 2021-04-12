// Declare variable to store object in data.js
var tableData = data;

// Define function to create table from data.js file
function buildTable(sightings) {
    tableBody.html("");

    // Loop through array of objects
    sightings.forEach(function(ufoSightings) {

        // Log to console to verify object data
        console.log(ufoSightings);

        // Declare variable to store elements and populate table rows
        var tableRow = tableBody.append("tr");

        // Append object's key-value pairs to table
        Object.entries(ufoSightings).forEach(function([objectKey, objectValue]) {

            // Log to console to verify object keys and values
            console.log(objectKey, objectValue);

            // Declare variable to store elements and populate table cells
            var tableCell = tableRow.append("td");

            // Append object's values to table
            tableCell.text(objectValue);
        });
    });
};

// Define function to filter table by dates input by user
function filterTable() {

    // Declare variable to store input date
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");

    // Declare variable to store a copy of data for filtering
    var filteredData = tableData;

    // Conditional statement to reset original table on button click
    if (inputValue != "") {
        var filteredData = tableData.filter(function(sightingRow) {
            
            // Boolean conditional statement to display table rows matching input date
            if (inputValue === sightingRow.datetime) {
                return true;
            }
        });
    };
    buildTable(filteredData);
};

// Reference variable declared in buildTable function and use d3 to display it on index.html
var tableBody = d3.select("tbody");

// Build table
buildTable(tableData);

// Declare variable to reference "Filter Table" button and input field
var filterButton = d3.select("#filter-btn");

// Create event handler to call function when "Filter Table" button is clicked
filterButton.on("click", filterTable);