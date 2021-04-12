// from data.js
var tableData = data;

// Define function to create table
function buildTable(sightings) {
    tableBody.html("");

    // Loop through array of objects
    sightings.forEach(function(ufoSightings) {

        // Log to console for potential debugging
        console.log(ufoSightings);

        // Declare variable to store elements for each row
        var tableRow = tableBody.append("tr");

        // Append object's key-value pairs to table
        Object.entries(ufoSightings).forEach(function([objectKey, objectValue]) {

            // Log to console for potential debugging
            console.log(objectKey, objectValue);

            // Declare variable to store elements for each cell
            var tableCell = tableRow.append("td");

            // Append object's values to table
            tableCell.text(objectValue);
        });
    });
};

// Define function to filter table