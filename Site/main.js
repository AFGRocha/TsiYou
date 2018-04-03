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

//Hard code user for testing

let Users = [
    {
        username: "Admin",
        password: "admin123",
        email: "admin@admin.com"
    },
    {
        username: "Daiki",
        password: "chupp",
        email: "daiki@admin.com"
    }
]

//

function init(){

    //Login
    let usernameLogin = document.getElementById("username")
    let passwordLogin = document.getElementById("password")
    let loginBtn = document.getElementById("login")
    let logChecker = document.getElementById("logCheck")
  

    loginBtn.addEventListener("click", function () {

        for(let i = 0; i < Users.length; i++){

            if (usernameLogin.value == Users[i].username){

                if (passwordLogin.value == Users[i].password){
                    console.log("User Logged in")
                    console.log("Username: " + usernameLogin.value)
                    console.log("Password: " + passwordLogin.value)
            
                    document.getElementById('logText').style.visibility = 'hidden';
                    document.getElementById('signText').style.visibility = 'hidden';
                    document.getElementById('userText').innerHTML = usernameLogin.value + " " + '<i class="fa fa-user" style="font-size:24px"></i>';
                    $('#loginModal').modal('hide');
                    break
                }

                else{
                    logChecker.innerHTML = "O Username ou Password estão errados"
                }
            }

            else{
                logChecker.innerHTML = "O Username ou Password estão errados"
            }
        }

      
        
    })



    //SignUp
    let email = document.getElementById("email")
    let usernameSign = document.getElementById("newUser")
    let passwordSign = document.getElementById("newPass")
    let passwordSign2 = document.getElementById("newPass2")
    let signupBtn = document.getElementById("signup")
    let signChecker = document.getElementById("signCheck")

    signupBtn.addEventListener("click", function () {

        if (passwordSign.value == passwordSign2.value){
            let myUser = new User(usernameSign.value,passwordSign.value,email.value)
            console.log(myUser)
            $('#signupModal').modal('hide');
        }
        else{
            signChecker.innerHTML = "Passwords não estao iguais"
        }


    })
}
