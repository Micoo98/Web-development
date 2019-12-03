class Account{
    constructor(){
        var a_userName;
        var a_password;
    }
}




function togglePassword(){
    var pass = document.getElementById('password');

    if(pass.type==="password"){
        pass.type = "text";
    }
    else{
        pass.type = "password";
    }
}

function checkPassword(name,passW){
    if(name == "micoo98" && passW == "110987718Aa"){
        alert("Access Granted");
    }
    else{
        alert("Access Denied");
    }
}