// Declare variable to store object in data.js
var tableData = data;

// Reference variable declared in buildTable function and use d3 to display it on index.html
var tableBody = d3.select("tbody");

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

// Declare variable to store empty dictionary
var filterDictionary = {};

// Define function to filter on multiple criteria
function multipleFilters() {

    // Prevent page from reloading using D3
    d3.event.preventDefault();

    // Declare variables to store inputs
    var inputCriteria = d3.select(this).select("input");
    var inputValue = inputCriteria.property("value");
    var filteredID = inputCriteria.attr("id");

    // Conditional statement to call filterTable function and populate array
    if (inputValue) {
        filterDictionary[filteredID] = inputValue;      
    }
    else {
        delete filterDictionary[filteredID];     
    }

    // Call filterTable function
    filterTable();
}

// Define function to filter table by dates input by user
function filterTable() {

    // Prevent page from reloading using D3
    d3.event.preventDefault();

    // Declare variable to store a copy of data for filtering
    var filteredData = tableData;

    // forEach statement to retrieve multiple values from table
    Object.entries(filterDictionary).forEach(([objectKey, objectValue]) => {
        filteredData = filteredData.filter(tableRow => tableRow[objectKey] === objectValue);
    });

    // Call buildTable function
    buildTable(filteredData);
};

// Declare variables to reference "Filter Table" button
var filterButton = d3.selectAll(".filter");

// Create event handler to call filterTable function when "Filter Table" button is clicked
filterButton.on("change", multipleFilters);

// Call buildTable function
buildTable(tableData);