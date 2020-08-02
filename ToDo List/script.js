
function validate(callback){
    var  uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;
    //alert(9);
  // callback()
  if(uname == "admin" && pwd == "12345"){
      //console.log(9);
      callback();
      alert("Login Successfully");
      return true;
  } 
     
    else if(uname == "" || pwd == ""){
   alert("Input fields cannot be empty");
       return false;
    }
    else{
         alert("Wrong");
         return false;
        }
    }           
function validate2(){
        window.location.href = "todo.html";  
     }
       











