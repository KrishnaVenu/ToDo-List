$(document).ready("load",ajax());
let item =[];
function ajax(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var response = JSON.parse(this.responseText);
      generate_table(response);
        /* var output = "";
        for(var i = 0 ;i < response.length;i++){
            output += "<li>" + response[i].title + "</li>";
            output += "<li>" + response[i].completed + "</li>";
        }*/
//console.log(output);
//document.getElementById("demo").innerHTML=output;
    }
};
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}


function generate_table(data) {
    console.log(data);
    // Extract value from table header. 
    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    // Create a table.
    var table = document.createElement("table");
    // Create table header row using the extracted headers above.
    var tr = table.insertRow(-1);                   // table row.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // add API data to the table as rows.
    for (var i = 0; i < data.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
        }
    }

    // Now, add the newly created table with API data, to a container.
    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}
