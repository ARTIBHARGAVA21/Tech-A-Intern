function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="user")
    {
        
        alert("login successfully");
        window.location.replace("1.html");
        return false;
    }
    else{
        alert("login failed");
        
    }
}
function lpage(){
    window.location.replace("Landingpage.html")
}