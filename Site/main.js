window.onload = function() {

    init()

}
//Users

class User{
    constructor(username,password,email){
        this.username = username
        this.password = password
        this.email = email
    }
}





function init(){

    let usernamelogin = document.getElementById("username")
    let passwordlogin = document.getElementById("password")
    let loginBtn = document.getElementById("login")
    let email

    loginBtn.addEventListener("click", function () {

        console.log("User Logged in")
        console.log("Username: " + usernamelogin.value)
        console.log("Password: " + passwordlogin.value)

        document.getElementById('logText').style.visibility = 'hidden';
        document.getElementById('signText').style.visibility = 'hidden';
        document.getElementById('userText').innerHTML = usernamelogin.value + " " + '<i class="fa fa-user" style="font-size:24px"></i>';
        $('#loginModal').modal('hide');
        
    })

}
