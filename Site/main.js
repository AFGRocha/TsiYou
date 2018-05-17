window.onload = function() {

    let control = document.title
    console.log("Loaded: " + control)
    init()

    if (control == "TsiYou"){
        document.getElementsByTagName("BODY")[0].onresize = function() {
            let w = window.innerWidth;
            let h = window.innerHeight;
            console.log("Largura atual da página: " + w)
            console.log("Altura atual da página: " + h)
            renderDocentes()
        };
    }
  

 
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


//Hard code parcerias 
let testPartner = new Partner("Nonius Software","Moreira da Maia","https://www.noniussoftware.com/en/","https://www.noniussoftware.com/wp-content/uploads/2015/04/Logo_Nonius.png")
let Partners = []
Partners.push(testPartner)
Partners.push(testPartner)
Partners.push(testPartner)

//Hard code events

let Events = []
let eventTest = new Event("ESMAPP","Algo","19/04/2018","Teste","ESMAD - Sala B201","teste","teste","https://www.esmad.ipp.pt/noticias/esmapp-1a-edicao-do-projeto-interdisciplinar/image_mini")
let eventTest2 = new Event("ESMAPP2","Algo","19/04/2018","Teste","ESMAD - Sala B201","teste","teste","https://www.esmad.ipp.pt/noticias/esmapp-1a-edicao-do-projeto-interdisciplinar/image_mini")
Events.push(eventTest)
Events.push(eventTest2)
Events.push(eventTest)
Events.push(eventTest)
Events.push(eventTest)
Events.push(eventTest)
Events.push(eventTest)
Events.push(eventTest)


//

function init(){

    //Login
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

    //Logout
    let logout = document.getElementById("logout")
    logout.addEventListener("click",function(){

        document.getElementById('logText').style.display = 'inline';
        document.getElementById('signText').style.display = 'inline';
        document.getElementById('userText').style.display = 'none'
        document.getElementById('logout').style.display = 'none'
        localStorage.removeItem("loggedUser")


    })

   
    let control = document.title

    if (control == "TsiYou"){
        renderDocentes()
        renderPartners()
    }

    if (control == "TsiYou - Eventos"){
        renderEvents()

         //Butao de evento ativar caso o admin ou docente venham de outra pagina
        if (localStorage.getItem("loggedUser")) {

            let currentUser  = JSON.parse(localStorage.loggedUser)
        
            if (currentUser.admin == 1 || currentUser.docente == 1){
                document.getElementById("btnAddEvent").style.display = 'inline'
            }
        }



        //Teste 
        let addEvent = document.getElementById("addEvent")
        let eventName = document.getElementById("eventName")
        let eventDesc = document.getElementById("eventDesc")
        let eventDate = document.getElementById("eventDate")
        let eventTime = document.getElementById("eventTime")
        let eventLocal = document.getElementById("eventLocal")
        let eventAccountable = document.getElementById("eventAccountable")
        let eventCategory = document.getElementById("eventCategory")
        let eventPic = document.getElementById("eventPic")

        let docStr = ""

        for(let i = 0; i < Users.length; i++){

            if (Users[i].docente == 1) {
                eventAccountable.innerHTML = ""

                //<option value="saab">Eventos mais recentes</option>
                docStr += '<option value="' + Users[i].name + '">' + Users[i].name +'</option>'

                eventAccountable.innerHTML = docStr
            }
        }


        addEvent.addEventListener("submit", function (event) {

            event.preventDefault()
    
            let newEvent = new Event(eventName.value,eventDesc.value,eventDate.value,eventTime.value,eventLocal.value,eventCategory.value,eventAccountable.value,eventPic.value)
            Events.push(newEvent)   
            console.log(Events)
            renderEvents()
            $('#addEventModal').modal('hide');
            addEvent.reset()
        })

       


    }

    
}



//Lista de docentes


function renderDocentes(){

    let divDocente = document.getElementById("Docentes")

    let counter = 0
    let str = ""
    str += '<div class="row">'
    let w = window.innerWidth;
    let h = window.innerHeight;

    if (w >= 1000){
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
    


    if(w < 1000){
        for(let i = 0; i < Users.length; i++){

            if (Users[i].docente == 1) {
                divDocente.innerHTML = ""
    
                counter++
    
                
                
                
                str += '<div class="col-sm-12 col-md-6 col-lg-6">'
                str += '<div class="card" style="width: 18rem;">'
                str += '<img class="card-img-top" src="' + Users[i].image + '" alt="Card image cap">'
                str += '<div class="card-body">'
                str += '<h5 class="card-title text-dark">' + Users[i].name + '</h5>'   
                str += '</div></div></div>'
                
               
                
                divDocente.innerHTML = str
            }
    
            if(counter == 2){
            
                str += '</div>'
                divDocente.innerHTML = str
    
                break
            }
        }
    }
}



//Lista de parcerias 

function renderPartners(){

    let divPartners = document.getElementById("Parcerias")

    let counter = 0
    let str = ""
    str += '<div class="row">'
    //str += '<div class="col-md-2 col-lg-2"></div>'
    
    for(let i = 0; i < Partners.length; i++){

        
            divPartners.innerHTML = ""

            counter++

            
            
            
            str += '<div class="col-sm-4 col-md-4 col-lg-4">'
            str += '<center><img src="' + Partners[i].image + '"></center>'

            str += '</div>'
            //str += '<div class="col-md-1 col-lg-1"></div>'
           
            
            divPartners.innerHTML = str
        

        if(counter == 3){
        
            str += '</div>'
            divPartners.innerHTML = str

            break
        }
    }
}


//Lista de eventos

function renderEvents(){
    let divEvents = document.getElementById("Events")

    let str = ""
    
    let counter = 0
    let eventCounter = 0
    for(let i = 0; i < Events.length; i++){

       
            divEvents.innerHTML = ""

            if( counter == 0){
                str += '<div class="row">'
            }


            counter++
           
            
            
            str += '<div class="col-sm-12 col-md-4 col-lg-4">'
            str += '<div class="card" style="width: 18rem;">'
            str += '<img class="card-img-top" src="' + Events[i].image + '" alt="Card image cap">'
            str += '<div class="card-body">'
            str += '<h5 class="card-title text-dark">' + Events[i].name + '</h5>'  
            str += '<p class="card-title text-dark">' + Events[i].data + '</p>' 
            str += '<p class="card-title text-dark">' + Events[i].local + '</p>'  
            str += '<br><center><input type="button" data-toggle="modal" data-target="#eventModal" class="btn openEvent" value="Ver mais" id="'+ eventCounter + '"></center>' 
            str += '</div></div></div>'

            divEvents.innerHTML = str
            eventCounter++
            
            if (counter == 3){
                counter = 0

                str += '</div><br><br>'

            divEvents.innerHTML = str

            }
    
    }


      //Cria o butao remover que remove o respetivo filme de acordo o seu ID
      let btnOpen = document.getElementsByClassName("openEvent")


      for(let i = 0; i < btnOpen.length; i++){
          btnOpen[i].addEventListener("click", function(){

            let eventTitle = document.getElementById("eventTitle")

            eventTitle.innerHTML = Events[i].name

        

          }) 
      }
}