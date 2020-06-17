var counter = 0;
$(document).ready("load",ajax());
let item =[];
function ajax(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        var response = JSON.parse(this.responseText);
      generate_table(response);
     
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
    var th = document.createElement("th");      // table header.
    
    
 // add API data to the table as rows.
    for (var i = 0; i < data.length; i++) {
       tr = table.insertRow(-1);
       var checkbox = document.createElement("input");
       checkbox.setAttribute("type","checkbox");
    if (data[i].completed == true){
       checkbox.setAttribute("disabled","true");
        checkbox.setAttribute("checked","true");
    }
       var tableCell = tr.insertCell(-1);
      tr.appendChild(checkbox);
     

  for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];   
           tr.appendChild(tabCell);
           }
           
    }

    var divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);


$("input").click(function(){

    var promise = new Promise(function(resolve , reject){
     counter ++;
     
    if(counter == 5){
        resolve("Congrats.5 Tasks have been Successfully Completed!!!");
    }
    });
 promise.then(function(y){
       alert(y);
    })   
});
}
