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
        this.recomendations = []
    }
}

//Parcerias 

class Partner{
    constructor(company,local,link,image){
        this.company = company
        this.local = local
        this.link = link
        this.image = image
    }
}

//Eventos
class Event{
    constructor(name,desc,data,hour,local,category,accountable,image){
       // this.id =
       this.name = name
       this.desc = desc
       this.data = data
       this.hour = hour
       this.local = local 
       this.category = category
       this.accountable = accountable
       this.image = image

    }

}


//Hard code users 
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



//Tags

let allTags = ["Seminario","teste"]

//Hard code parcerias 
let testPartner = new Partner("Nonius Software","Moreira da Maia","https://www.noniussoftware.com/en/","https://www.noniussoftware.com/wp-content/uploads/2015/04/Logo_Nonius.png")
let Partners = []
Partners.push(testPartner)
Partners.push(testPartner)
Partners.push(testPartner)

//Hard code events

let Events = []
let eventTest = new Event("ESMAPP","Algo","2018-04-19","Teste","ESMAD - Sala B201","-Seminario","teste","https://www.esmad.ipp.pt/noticias/esmapp-1a-edicao-do-projeto-interdisciplinar/image_mini")
let eventTest2 = new Event("ESMAPP2","Algo","2018-04-19","Teste","ESMAD - Sala B201","-teste","teste","https://www.esmad.ipp.pt/noticias/esmapp-1a-edicao-do-projeto-interdisciplinar/image_mini")
let eventTest3 = new Event("ESMAPP3","Algo","2018-07-20","Teste","ESMAD - Sala B201","-teste","teste","https://www.esmad.ipp.pt/noticias/esmapp-1a-edicao-do-projeto-interdisciplinar/image_mini")

Events.push(eventTest)
Events.push(eventTest2)
Events.push(eventTest3)
Events.push(eventTest)
Events.push(eventTest)
Events.push(eventTest)
Events.push(eventTest)
Events.push(eventTest)



function storage(){
     //User local storage
     if (localStorage.getItem("allUsers")) {

        let getUsers = JSON.parse(localStorage.allUsers)
        Users = getUsers
        }
    
        else{
            localStorage.allUsers = JSON.stringify(Users)
        }
    
        //Partners local storage
        if (localStorage.getItem("allPartners")) {
    
            let getPartners = JSON.parse(localStorage.allPartners)
            Partners = getPartners
        }
    
        else{
                localStorage.allPartners = JSON.stringify(Partners)
        }
    
          //Event local storage
          if (localStorage.getItem("allEvents")) {
    
            let getEvents = JSON.parse(localStorage.allEvents)
            Events = getEvents
            }
        
            else{
                localStorage.allEvents = JSON.stringify(Events)
            }
}


function account(){
     //Login
     let control = document.title    
     let usernameLogin = document.getElementById("username")
     let passwordLogin = document.getElementById("password")
     let loginBtn = document.getElementById("login")
     let logChecker = document.getElementById("logCheck")
     
   
     //Local Storage test
     if (localStorage.getItem("loggedUser")) {
 
         let pastUser  = JSON.parse(localStorage.loggedUser)
         console.log("User Logged in")
         console.log("Username: " + pastUser.username)
         console.log("Password: " + pastUser.password)
         //console.log(Users[i])
         
 
 
         document.getElementById('logText').style.display = 'none';
         document.getElementById('signText').style.display = 'none';
         if (pastUser.admin == 1){
             document.getElementById('userText').style.display = 'inline'
             document.getElementById('userText').innerHTML = pastUser.username + " " + '<i class="fa fa-user" style="font-size:24px;color:red"></i>';
             document.getElementById('logout').style.display = 'inline'
         }
 
         else{
             document.getElementById('userText').style.display = 'inline'
             document.getElementById('userText').innerHTML = pastUser.username + " " + '<i class="fa fa-user" style="font-size:24px"></i>';
             document.getElementById('logout').style.display = 'inline'
         }
     }
 
     loginBtn.addEventListener("submit", function (event) {
 
         event.preventDefault()
 
         for(let i = 0; i < Users.length; i++){
 
             if (usernameLogin.value == Users[i].username){
 
                 if (passwordLogin.value == Users[i].password){
 
                     //Local Storage test 
                     localStorage.loggedUser = JSON.stringify(Users[i])
 
                     console.log("User Logged in")
                     console.log("Username: " + usernameLogin.value)
                     console.log("Password: " + passwordLogin.value)
                     console.log(Users[i])
             
                     document.getElementById('logText').style.display = 'none';
                     document.getElementById('signText').style.display = 'none';
                     if (Users[i].admin == 1){
                         document.getElementById('userText').style.display = 'inline'
                         document.getElementById('userText').innerHTML = usernameLogin.value + " " + '<i class="fa fa-user" style="font-size:24px;color:red"></i>';
                         document.getElementById('logout').style.display = 'inline'
                     }
 
                     else{
                         document.getElementById('userText').style.display = 'inline'
                         document.getElementById('userText').innerHTML = usernameLogin.value + " " + '<i class="fa fa-user" style="font-size:24px"></i>';
                         document.getElementById('logout').style.display = 'inline'
                     }
                     
                     if (Users[i].docente == 1 || Users[i].admin == 1){
                         if (control == "TsiYou - Eventos"){
                         document.getElementById("btnAddEvent").style.display = 'inline'
                         }
                     }
 
                     $('#loginModal').modal('hide');
                     loginBtn.reset()
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
             let localUsers = localStorage.getItem("allUsers")
             let myUserArray  = JSON.parse(localUsers)
             myUserArray.push(myUser)
             localStorage.allUsers = JSON.stringify(myUserArray)
             signupBtn.reset()
             $('#signupModal').modal('hide');
         }
         else{
             signChecker.innerHTML = "Passwords não estao iguais"
         }
         
 
     })
 
     //Logout
     let logout = document.getElementById("logout")
     logout.addEventListener("click",function(){
 
         document.getElementById('logText').style.display = 'inline';
         document.getElementById('signText').style.display = 'inline';
         document.getElementById('userText').style.display = 'none'
         document.getElementById('logout').style.display = 'none'
         localStorage.removeItem("loggedUser")
 
 
     })
 
}