function validate(){
let uname = document.getElementById("uname").value;
let pwd = document.getElementById("pwd").value;
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
  if(!(uname == "admin")){
      document.getElementById("error1").innerHTML="Invalid Id";
      error1.style.color="red";
  } 
     
    else if(!(pwd == 12345)){
       document.getElementById("error2").innerHTML="invalid";
        error2.style.color="red";
       return false;
    }

    else{
         validate1(validate2);
    }
}
    function validate1(callback){
            let uname = document.getElementById("uname").value;
             let pwd = document.getElementById("pwd").value;   
            
                 if(uname == "admin" && pwd == 12345){
                     callback();
                    // alert(validate1);
                 }
                 else{
                     alert("Wrong");
                 }
                }             
        function validate2(){
         window.location.href = "todo.html";  
        }
              
        
                





















