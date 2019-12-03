function togglePassword(){
    var pass = document.getElementById('password');

    if(pass.type==="password"){
        pass.type = "text";
    }
    else{
        pass.type = "password";
    }
}

function checkPassword(){
    var name = document.getElementById("userName");
    var passW = document.getElementById("password");
    if(name.value == "bankAdmin" && passW.value == "banksarecool"){
        window.location.href = './Home.html';
    }
    else{
        alert("Incorrect Username or Password");
    }
}