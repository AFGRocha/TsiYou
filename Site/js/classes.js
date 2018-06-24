//Users

class User{
    constructor(username,password,email){
        this._id = User.getLastId() + 1
        this.username = username
        this.password = password
        this.email = email
        this.docente = 0
        this.admin = 0 
        this.image = ""
        this.name = ""
        this.myEvents = []
        this.myTags = []
        this.myScores = []
        this.formacao = ""
        this.uc = ""
        this.cv = ""
    }



        // Property Id
        get id() {
            return this._id
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


      // Get the last ID
      static getLastId() {
        let lastId = 0
        if (Users.length > 0) {
            lastId = parseInt(Users[Users.length-1]._id)
            console.log("last id = " + Users[Users.length-1]._id)
        }        
        return lastId
    }
}

//Parcerias 

class Partner{
    constructor(company,local,link,image){
        this._id = Partner.getLastId() + 1
        this.company = company
        this.local = local
        this.link = link
        this.image = image
    }

     // Property Id
     get id() {
        return this._id
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
    
      // Get the last ID
      static getLastId() {
        let lastId = 0
        if (Partners.length > 0) {
            lastId = parseInt(Partners[Partners.length-1]._id)
        }        
        return lastId
    }
}

//Eventos
class Event{
    constructor(name,desc,data,hour,local,category,accountable,image){
        this._id = Event.getLastId() + 1
       this.name = name
       this.desc = desc
       this.data = data
       this.hour = hour
       this.local = local 
       this.category = category
       this.accountable = accountable
       this.image = image
       this.comments = []
       this.scores = []
       this.average = 0

    }


     // Property Id
     get id() {
        return this._id
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
    
       // Get the last ID
       static getLastId() {
        let lastId = 0
        if (Events.length > 0) {
            lastId = parseInt(Events[Events.length-1]._id)
        }        
        return lastId
    }
}

class Testimonial{
    constructor(user,image,text){
        this.user = user
        this.image = image
        this.text = text
    }
      // Property user
      get user() {
        return this._user
    }

    set user(newUser) {
        this._user = newUser        
    }

     // Property image
     get image() {
        return this._image
    }
                
    set image(newImage) {
        this._image = newImage          
    } 


    // Property password
    get text() {
        return this._text
    }
    
    set text(newText) {
        this._text = newText      
    }
}

class Comment{
    constructor(user,image,text){
        this.user = user
        this.image = image
        this.text = text
    }

     // Property user
    get user() {
      return this._user
  }

  set user(newUser) {
      this._user = newUser        
  }

   // Property image
   get image() {
      return this._image
  }
              
  set image(newImage) {
      this._image = newImage          
  } 


  // Property password
  get text() {
      return this._text
  }
  
  set text(newText) {
      this._text = newText      
  }
}
//Hard code comments
let comment1 = new Comment("José Silva","","Gostei muito deste evento")


//Hard code testimonails
let Testimonials = []
let testi1 = new Testimonial("Óscar Sousa","https://imginger.s-ul.eu/hWPYJaZj","Fiz a escolha correta em ter optado por TSIW. Sinto que estou preparado para o futuro.")
Testimonials.push(testi1)
Testimonials.push(testi1)


//Hard code users 
let Users = []
let Admin1 = new User("Admin","admin123","admin@admin.com")
Admin1.admin = 1
Users.push(Admin1)
let docenteMario = new User("mpinto","mario123","mario@esmad.com")
docenteMario.docente = 1
docenteMario.name = "Mário Pinto"
docenteMario.image = "https://www.eseig.ipp.pt/kmilt/images/mariopinto.jpg"
Users.push(docenteMario)

let docenteRicardo = new User("rqueiros","ric123","queiros@esmad.com")
docenteRicardo.docente = 1
docenteRicardo.name = "Ricardo Queirós"
docenteRicardo.image = "https://www.eseig.ipp.pt/kmilt/images/rq.jpg"
Users.push(docenteRicardo)

let docenteLino = new User("lino","lino123","lino@esmad.com")
docenteLino.docente = 1
docenteLino.name = "Lino Oliveira"
docenteLino.image = "https://www.eseig.ipp.pt/kmilt/images/lino.jpg"
Users.push(docenteLino)





//Tags

let allTags = ["Seminário","Conferência"]

//Hard code parcerias 
let Partners = []
let testPartner = new Partner("Nonius Software","Moreira da Maia","https://www.noniussoftware.com/en/","https://www.noniussoftware.com/wp-content/uploads/2015/04/Logo_Nonius.png")
let testPartner2 = new Partner("FABAMAQ0","Boavista","https://www.fabamaq.com/","https://www.fabamaq.com/files/modulos_config_site/1_1.png")
let testPartner3 = new Partner("Planeta Virtual","Porto","http://www.planetavirtual.pt/","http://www.planetavirtual.pt/images/logoHeader.png")
let testPartner4 = new Partner("Blip","Porto","https://blip.pt/","https://blip.pt/content/themes/ppb/assets/images/blip-logo.svg")
Partners.push(testPartner)
Partners.push(testPartner3)
Partners.push(testPartner4)
Partners.push(testPartner2)


//Hard code events

let Events = []
let esmapp = new Event("ESMAPP","O ESMAPP é um evento onde se pretende demonstrar as aplicaçoes desenvolvidas pelos alunos de 3º ano de TSIW","2018-04-19","11:00","ESMAD - Sala B201","-Seminário","Mário Pinto","https://www.esmad.ipp.pt/noticias/esmapp-1a-edicao-do-projeto-interdisciplinar/image_mini")
Events.push(esmapp)
let csii = new Event("CSII","No próximo dia 18 de maio irá realizar-se na Escola Superior de Media Artes e Design, a 2.ª edição da Conferência de Sistemas Interativos e Inteligentes, este ano subordinado ao tema “Creative Industry”.","2018-05-18","11:00 ","Auditório Luís Soares","-Conferência","Mário Pinto","https://www.esmad.ipp.pt/noticias/creative-industry-conferencia-de-sistemas-interativos-e-inteligentes/image_mini")
Events.push(csii)
let summer = new Event("MAD Summer School","MAD SUMMER SCHOOL is an intense learning experience and aims to be showcase of the educational offer of ESMAD: FILM & PHOTOGRAPHY, DESIGN, MEDIA DIGITAL AND WEB DEVELOPMENT.","2018-07-16","Teste","ESMAD","-Seminário","Admin","https://www.esmad.ipp.pt/news/mad-international-summer-school/image_mini")
Events.push(summer)


csii.comments.push(comment1)


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

      //Testimonail local storage

      if(localStorage.getItem("savedTestimonials")){
          let getTest = JSON.parse(localStorage.savedTestimonials)
          Testimonials = getTest
      }

      else{
          localStorage.savedTestimonials = JSON.stringify(Testimonials)
      }
}


function account(){
     //Login
     let control = document.title    
     let usernameLogin = document.getElementById("username")
     let passwordLogin = document.getElementById("password")
     let loginBtn = document.getElementById("login")
     let logChecker = document.getElementById("logCheck")
     let backOffice = document.getElementById("backOffice")
     
   
     //Local Storage
     if (localStorage.getItem("loggedUser")) {
 
         let pastUser  = JSON.parse(localStorage.loggedUser)
         console.log("User Logged in")
         console.log("Username: " + pastUser._username)
         console.log("Password: " + pastUser._password)
         //console.log(Users[i])
         
 
 
         document.getElementById('logText').style.display = 'none';
         document.getElementById('signText').style.display = 'none';
         if (pastUser.admin == 1 || pastUser.docente == 1){
             document.getElementById('userText').style.display = 'inline'
             document.getElementById('userText').innerHTML = pastUser._username + " " + '<i class="fa fa-user" style="font-size:24px;"></i>';
             document.getElementById('logout').style.display = 'inline'
             document.getElementById('backOffice').style.display = 'inline'
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
 
                     //Local Storage 
                     localStorage.loggedUser = JSON.stringify(Users[i])
 
                     console.log("User Logged in")
                     console.log("Username: " + usernameLogin.value)
                     console.log("Password: " + passwordLogin.value)
                     console.log(Users[i])
             
                     document.getElementById('logText').style.display = 'none';
                     document.getElementById('signText').style.display = 'none';
                     if (Users[i].admin == 1 || Users[i].docente == 1){
                         document.getElementById('userText').style.display = 'inline'
                         document.getElementById('userText').innerHTML = usernameLogin.value + " " + '<i class="fa fa-user" style="font-size:24px;  ">';
                         document.getElementById('logout').style.display = 'inline'
                         document.getElementById('backOffice').style.display = 'inline'
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
                     location.reload()
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
             alert("Conta feita")
             signupBtn.reset()
             $('#signupModal').modal('hide');
             location.reload()
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
         document.getElementById('backOffice').style.display = 'none'
 
         location.reload()
     })
 
}