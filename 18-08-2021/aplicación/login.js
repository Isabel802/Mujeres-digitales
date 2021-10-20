var iniciarsesion = function(){
    var email = document.getElementById('inputEmail').value
    var password = document.getElementById('inputPassword').value
    console.log(email)
    console.log(password)
    if(email ==null || email  == '' || email  == undefined){
        alert('Email es obligatorio')
        return false;
    }
    if(password ==null || password == '' || password == undefined){
        alert('Password es obligatorio')
        return false;
    }
}