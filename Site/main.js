window.onload = function() {

    init()

}
//Users

class User{
    constructor(username,password,email){
        this.username = username
        this.password = password
        this.email = email
        this.docente = 0
        this.admin = 0 
        this.image = ""
        this.name = ""
    }
}




//Hard code users for testing
let Users = []
let Admin1 = new User("Admin","admin123","admin@admin.com")
Admin1.admin = 1
let docenteTest = new User("Mariozinho","mario123","mario@mario.com")
docenteTest.docente = 1
docenteTest.name = "Mário Pinto"
docenteTest.image = "https://www.eseig.ipp.pt/kmilt/images/mariopinto.jpg"


Users.push(Admin1)
Users.push(docenteTest)
Users.push(docenteTest)
Users.push(docenteTest)




//

function init(){

    //Login
    let usernameLogin = document.getElementById("username")
    let passwordLogin = document.getElementById("password")
    let loginBtn = document.getElementById("login")
    let logChecker = document.getElementById("logCheck")
  

    loginBtn.addEventListener("submit", function (event) {

        event.preventDefault()

        for(let i = 0; i < Users.length; i++){

            if (usernameLogin.value == Users[i].username){

                if (passwordLogin.value == Users[i].password){
                    console.log("User Logged in")
                    console.log("Username: " + usernameLogin.value)
                    console.log("Password: " + passwordLogin.value)
                    console.log(Users[i])
            
                    document.getElementById('logText').style.visibility = 'hidden';
                    document.getElementById('signText').style.visibility = 'hidden';
                    if (Users[i].admin == 1){
                        document.getElementById('userText').innerHTML = usernameLogin.value + " " + '<i class="fa fa-user" style="font-size:24px;color:red"></i>';
                    }

                    else{
                        document.getElementById('userText').innerHTML = usernameLogin.value + " " + '<i class="fa fa-user" style="font-size:24px"></i>';
                    }
                    
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

    signupBtn.addEventListener("submit", function (event) {

        event.preventDefault()

        if (passwordSign.value == passwordSign2.value){
            let myUser = new User(usernameSign.value,passwordSign.value,email.value)
            Users.push(myUser)
            console.log(myUser)
            $('#signupModal').modal('hide');
        }
        else{
            signChecker.innerHTML = "Passwords não estao iguais"
        }


    })

    renderDocentes()
}



//Lista de docentes


function renderDocentes(){

    let divDocente = document.getElementById("Docentes")

    let counter = 0
    let str = ""
    str += '<div class="row">'
    
    for(let i = 0; i < Users.length; i++){

        if (Users[i].docente == 1) {
            divDocente.innerHTML = ""

            counter++

            
            
            
            str += '<div class="col-sm-12 col-md-4 col-lg-4">'
            str += '<div class="card" style="width: 18rem;">'
            str += '<img class="card-img-top" src="' + Users[i].image + '" alt="Card image cap">'
            str += '<div class="card-body">'
            str += '<h5 class="card-title text-dark">' + Users[i].name + '</h5>'   
            str += '</div></div></div>'
            
           
            
            divDocente.innerHTML = str
        }

        if(counter == 3){
        
            str += '</div>'
            divDocente.innerHTML = str

            break
        }
    }
}
