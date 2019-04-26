// from data.js
var tableData = data;

// Select the table body tag
var tbody = d3.select("tbody");
// Select the filter button
var filter = d3.select("#filter-btn");

// Append info for each ufo sighting to the table body
tableData.forEach(ufo => {
    //Create new row for each ufo sighting
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key, value]) {
        //Append all values of the ufo sighting to the row
        var td = row.append("td").text(value);
    });
});

// Run function when there is a change in any of the filter inputs
d3.selectAll(".filter").on("change", updateFilters);
// Run function when the filter button is clicked
filter.on("click", updateFilters);

//Create empty dictionary
var filters = {};

function updateFilters() {

    d3.event.preventDefault();

    // Selects the input object
    var changedElement = d3.select(this).select("input");
    // Selects the input text value
    var elementValue = changedElement.property("value");
    // Selects the input id name
    var filterId =  changedElement.attr("id");

    // If the element value exists
    //Add it to the dictionary with the id as the key
    if (elementValue) {
	    filters[filterId] = elementValue;
    } 
    // Else delete the entry in the dictionary
    else {
	    delete filters[filterId];
    }

    // call the filterTable function
    filterTable();
}

function filterTable() {
    var filteredData = tableData;
    // code to filter table using 'filters'
    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
      });
    
    // Clear current table
    tbody.html("");
    
    // Add all the filtered data to the tabe body
    filteredData.forEach(ufo => {
        var row2 = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]) {
            var td2 = row2.append("td").text(value);
        });
      });
}
