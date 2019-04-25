// // from data.js
// var tableData = data;

// // YOUR CODE HERE!
// var tbody = d3.select("tbody");
// var filter = d3.select("#filter-btn");

// tableData.forEach(ufo => {
//     var row = tbody.append("tr");
//     Object.entries(ufo).forEach(function([key, value]) {
//         var td = row.append("td").text(value);
//     });
// });

// d3.selectAll(".filter").on("change", updateFilters);
// filter.on("click", updateFilters);

// var filters = {};

// function updateFilters() {

//     d3.event.preventDefault();

//     var changedElement = d3.select(this).select("input");
//     var elementValue = changedElement.property("value");
//     var filterId =  changedElement.attr("id");

//     if (elementValue) {
// 	    filters[filterId] = elementValue;
//     } 
//     else {
// 	    delete filters[filterId];
//     }

//     // call the filterTable function
//     filterTable();
// }

// function filterTable() {
//     var filteredData = tableData;
//     // code to filter table using 'filters'
//     Object.entries(filters).forEach(([key, value]) => {
//         filteredData = filteredData.filter(row => row[key] === value);
//       });

//     tbody.html("");

//     filteredData.forEach(ufo => {
//         var row2 = tbody.append("tr");
//         Object.entries(ufo).forEach(function([key, value]) {
//             var td2 = row2.append("td").text(value);
//         });
//       });
// }


//-------------------------------------------------------------------------------

var tableData = data;

var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

tableData.forEach (item => {
    var row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
        var dt = row.append("td").text(value);
    });
});


button.on("click", updateFilters);

var filters = {};

function updateFilters() {
    d3.event.preventDefault();
    var all = d3.selectAll("li").select("input");

    var items = all._groups;

    items.forEach(item => {
        var input = item.property("value");
        var itemId = item.property("id");

        if (input) {
            filters[itemId] = input;
        }
        else {
            delete filters[itemId];
        }

    });
    
    updateTable();
}

function updateTable() {

    tbody.html("");

    var filteredData = tableData;

    Object.entries(filters).forEach(([key,value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    filteredData.forEach(ufo => {
        var row2 = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var td2 = row2.append("td").text(value);
        });
    });
}

