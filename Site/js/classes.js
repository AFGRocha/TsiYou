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

     // Property username
     get username() {
        return this._username
    }

    set username(newUsername) {
        this._username = newUsername        
    }

    // Property password
    get password() {
        return this._password
    }
    
    set password(newPassword) {
        this._password = newPassword      
    }

    // Property email
    get email() {
        return this._email
    }
    
    set email(newEmail) {
        this._email = newEmail     
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
    
    // Property company
     get company() {
        return this._company
    }
    
    set company(newCompany) {
        this._company = newCompany        
    }

    // Property Local
    get local() {
        return this._local
    }
    
    set local(newLocal) {
        this._local = newLocal        
    }

    // Property Link
    get link() {
        return this._link
    }
        
    set link(newLink) {
        this._link = newLink        
    }


    // Property Image
    get image() {
        return this._image
    }
        
    set image(newImage) {
        this._image = newImage        
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

    // Property name
    get name() {
        return this._name
    }
            
    set name(newName) {
        this._name = newName            
    }

    // Property desc
    get desc() {
        return this._desc
    }
                
    set desc(newDesc) {
        this._desc = newDesc            
    }

    // Property Data
    get data() {
        return this._data
    }
                
    set data(newData) {
        this._data = newData            
    }

    // Property Hour
    get hour() {
        return this._hour
    }
                
    set hour(newHour) {
        this._hour = newHour            
    }

    // Property local
    get local() {
        return this._local
    }
                
    set local(newLocal) {
        this._local = newLocal            
    }

    // Property category
    get category() {
        return this._category
    }
                
    set category(newCategory) {
        this._category = newCategory            
    }

    // Property accountable
    get accountable() {
        return this._accountable
    }
                
    set accountable(newAccountable) {
        this._accountable = newAccountable            
    }
    
    
    
    // Property image
    get image() {
        return this._image
    }
                
    set image(newImage) {
        this._image = newImage          
    } 
    
    
}


//Hard code users 
let Users = []
let Admin1 = new User("Admin","admin123","admin@admin.com")
Admin1.admin = 1
let docenteMario = new User("Mariozinho","mario123","mario@mario.com")
docenteMario.docente = 1
docenteMario.name = "Mário Pinto"
docenteMario.image = "https://www.eseig.ipp.pt/kmilt/images/mariopinto.jpg"

let docenteRicardo = new User("rquerios","ric123","queiros@queiros.com")
docenteRicardo.docente = 1
docenteRicardo.name = "Ricardo Queirós"
docenteRicardo.image = "https://www.eseig.ipp.pt/kmilt/images/rq.jpg"

Users.push(Admin1)
Users.push(docenteMario)
Users.push(docenteRicardo)
Users.push(docenteMario)





//Tags

let allTags = ["Seminario","teste"]

//Hard code parcerias 
let testPartner = new Partner("Nonius Software","Moreira da Maia","https://www.noniussoftware.com/en/","https://www.noniussoftware.com/wp-content/uploads/2015/04/Logo_Nonius.png")
let Partners = []
Partners.push(testPartner)
Partners.push(testPartner)
Partners.push(testPartner)
Partners.push(testPartner)


//Hard code events

let Events = []
let eventTest = new Event("ESMAPP","O ESMAPP é um evento onde se pretende demonstrar as aplicaçoes desenvolvidas pelos alunos de 3º ano de TSIW","2018-04-19","Teste","ESMAD - Sala B201","-Seminario","teste","https://www.esmad.ipp.pt/noticias/esmapp-1a-edicao-do-projeto-interdisciplinar/image_mini")
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


      //Tags local storage     
      
      if(localStorage.getItem("savedTags")){

        let getTags = JSON.parse(localStorage.savedTags)
        allTags = getTags
      }

      else{
          localStorage.savedTags = JSON.stringify(allTags)
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
         console.log("Username: " + pastUser._username)
         console.log("Password: " + pastUser._password)
         //console.log(Users[i])
         
 
 
         document.getElementById('logText').style.display = 'none';
         document.getElementById('signText').style.display = 'none';
         if (pastUser.admin == 1){
             document.getElementById('userText').style.display = 'inline'
             document.getElementById('userText').innerHTML = pastUser._username + " " + '<i class="fa fa-user" style="font-size:24px;color:red"></i>';
             document.getElementById('logout').style.display = 'inline'
         }
 
         else{
             document.getElementById('userText').style.display = 'inline'
             document.getElementById('userText').innerHTML = pastUser._username + " " + '<i class="fa fa-user" style="font-size:24px"></i>';
             document.getElementById('logout').style.display = 'inline'
         }
     }
 
     loginBtn.addEventListener("submit", function (event) {
 
         event.preventDefault()
 
         for(let i = 0; i < Users.length; i++){
 
             if (usernameLogin.value == Users[i]._username){
 
                 if (passwordLogin.value == Users[i]._password){
 
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