window.onload = function() {

    storage()
    account()
    renderUser()
    editUser()
    renderMyEvents()
    removeMyEvents()
}




function renderUser(){

    let profilePhoto  = document.getElementById("profilePhoto")
    let profileName = document.getElementById("profileName")
    let profileUsername = document.getElementById("profileUsername")
    let profileEmail = document.getElementById("profileEmail")
    let profileMyEvents = document.getElementById("profileMyEvents")
    let myForm = document.getElementById("formacao")
    let profileForm = document.getElementById("profileForm")
    let myUC = document.getElementById("UC")
    let profileUC = document.getElementById("profileUC")
    let myCV = document.getElementById("CV")
    let profileCV = document.getElementById("profileCV")
    let str = ""

    if (localStorage.getItem("loggedUser")) {
        let currentUser  = JSON.parse(localStorage.loggedUser)

        if(currentUser.image == ""){
            profilePhoto.src = "https://www.w3schools.com/bootstrap4/img_avatar3.png"
        }

        else{
            profilePhoto.src = currentUser.image
        }
        
        profileName.innerHTML= currentUser.name
        profileUsername.innerHTML = currentUser._username
        profileEmail.innerHTML = currentUser._email
        



        for(let i = 0; i < currentUser.myEvents.length;i++){

            str += currentUser.myEvents[i]._name +"; "
        }

        profileMyEvents.innerHTML = str

        if(currentUser.docente == 1){
            myForm.style.display=""
            profileForm.style.display=""
            myUC.style.display=""
            profileUC.style.display=""
            myCV.style.display=""
            profileCV.style.display=""

            profileForm.innerHTML = currentUser.formacao
            profileUC.innerHTML = currentUser.uc
            profileCV.innerHTML = currentUser.cv


        }
        
    }
}

function editUser(){
    let editName = document.getElementById("editName")
    let editUsername = document.getElementById("editUsername")
    let editPassword = document.getElementById("editPassword")
    let editEmail = document.getElementById("editEmail")
    let editPhoto = document.getElementById("editPhoto")
    let showPass = document.getElementById("showPass")
    let editProfile = document.getElementById("editProfile")
    let editForm = document.getElementById("editForm")
    let editUC = document.getElementById("editUC")
    let editCV = document.getElementById("editCV")
    let formForm = document.getElementById("formForm")
    let formUC = document.getElementById("formUC")
    let formCV = document.getElementById("formCV")


    if (localStorage.getItem("loggedUser")) {
        let currentUser  = JSON.parse(localStorage.loggedUser)


        if(currentUser.docente == 1){
            editForm.style.display = ""
            editUC.style.display = ""
            editCV.style.display = ""
            formForm.style.display = ""
            formUC.style.display = ""
            formCV.style.display = ""
        }

        editName.value = currentUser.name
        editUsername.value = currentUser._username
        editPassword.value = currentUser._password
        editEmail.value = currentUser._email
        editPhoto.value = currentUser.image
        editForm.value = currentUser.formacao
        editUC.value = currentUser.uc
        editCV.value = currentUser.cv

      

        
    }

    
    showPass.addEventListener("click", function(){
         
        editPassword.type = "text"

    })
    
    editProfile.addEventListener("submit", function(){

        if (localStorage.getItem("loggedUser")) {
            let currentUser  = JSON.parse(localStorage.loggedUser)
           
            
            currentUser.name = editName.value  
            currentUser._username = editUsername.value 
            currentUser._password = editPassword.value 
            currentUser._email = editEmail.value 
            currentUser.image = editPhoto.value 
            currentUser.formacao = editForm.value
            currentUser.uc = editUC.value
            currentUser.cv = editCV.value

            localStorage.loggedUser = JSON.stringify(currentUser)

           for(let i = 0; i < Users.length;i++){


                if(Users[i]._username == currentUser._username ){

                    Users[i] = currentUser
                    localStorage.allUsers = JSON.stringify(Users)
                }

            }

            
            alert("Alterações guardadas")
            
        }
        

    }) 
}


        
function renderMyEvents(){
    let divmyEvents = document.getElementById("divmyEvents")
    let currentUser  = JSON.parse(localStorage.loggedUser)

    let str = ""
    
    let counter = 0
    let eventCounter = 0
    for(let i = 0; i < currentUser.myEvents.length; i++){

       
            divmyEvents.innerHTML = ""

            if( counter == 0){
                str += '<div class="row">'
            }


            counter++
           
            
            
            str += '<div class="col-sm-12 col-md-4 col-lg-4">'
            str += '<div class="card" style="width: 18rem;">'
            str += '<img class="card-img-top" src="' + currentUser.myEvents[i]._image + '" alt="Card image cap">'
            str += '<div class="card-body">'
            str += '<h5 class="card-title text-dark">' + currentUser.myEvents[i]._name + '</h5>'  
            str += '<p class="card-title text-dark">' + currentUser.myEvents[i]._data + '</p>' 
            str += '<p class="card-title text-dark">' + currentUser.myEvents[i]._local + '</p>'  
            str += '<br><center><input type="button" data-toggle="modal" data-target="#eventModal" class="btn openEvent" value="Ver mais" id="'+ eventCounter + '"></center>' 
            str += '</div></div></div>'

            console.log(currentUser.myEvents._name)
            divmyEvents.innerHTML = str
            eventCounter++
            
            if (counter == 3){
                counter = 0

                str += '</div><br><br>'

            divEvents.innerHTML = str

            }
    
    }


      //Abrir modal do Evento
      let btnOpen = document.getElementsByClassName("openEvent")


      for(let i = 0; i < btnOpen.length; i++){
          btnOpen[i].addEventListener("click", function(){
            
            let currentEvent = i
            let openEventTitle = document.getElementById("openEventTitle")
            let openEventImage = document.getElementById("openEventImage")
            let openEventDesc = document.getElementById("openEventDesc")
            let openEventData = document.getElementById("openEventData")
            let openEventLocal = document.getElementById("openEventLocal")
            let openEventCategory = document.getElementById("openEventCategory")
            let openEventAccountable = document.getElementById("openEventAccountable")
            let divComment = document.getElementById("divComment")

            openEventTitle.innerHTML = currentUser.myEvents[i]._name
            openEventImage.src = currentUser.myEvents[i]._image
            openEventDesc.innerHTML = "Descrição: " + currentUser.myEvents[i]._desc
            openEventData.innerHTML = "Data e hora: " + currentUser.myEvents[i]._data + " " + Events[i]._hour
            openEventLocal.innerHTML = "Local: " + currentUser.myEvents[i]._local
            openEventCategory.innerHTML ="Categoria:  " + currentUser.myEvents[i]._category
            openEventAccountable.innerHTML ="Responsável: " + currentUser.myEvents[i]._accountable
            
            
            //Envia o comentario 
            let btnComment =  document.getElementById("viewCo")
        
            //Verificar se o evento ja ocorreu 
            
            let today = new Date();
            let d = today.getTime()
            console.log(d)
            let timeTime = Date.parse(Events[i]._data)
            console.log("Milisegundos do evento: " + timeTime)


                if(timeTime < d){
                    btnComment.style.display = "inline"
                }
    
                else{
                    btnComment.style.display = "none"
                }
                btnComment.addEventListener("click", function (event) {

                    localStorage.openEvent = JSON.stringify(Events[i])

                    location.replace("../html/evento.html")
                })
          }) 
      }
}

function removeMyEvents(){

    let removeMyEvent = document.getElementById("removeMyEvent")
    let eventControl = document.getElementsByClassName("btn openEvent")
    let selectedEvent = 0
    let duplicate = 0

    //Identifica o evento pelo seu id
    for(let i = 0; i < eventControl.length; i++){
        eventControl[i].addEventListener("click", function(){

            console.log("Id do evento aberto: " + eventControl[i].id)
            selectedEvent = i

        }) 
    }

    //Adiciona o evento ao lista de eventos do utilizador
    removeMyEvent.addEventListener("click", function(){
         
        let currentUser  = JSON.parse(localStorage.loggedUser)

        currentUser.myEvents.splice(selectedEvent,1)
        

          
    
            
        //Update ao local Storage
            
        localStorage.loggedUser = JSON.stringify(currentUser)
    
            
        for(let i = 0; i < Users.length;i++){
   
            if(Users[i]._username == currentUser._username ){
  
                Users[i] = currentUser   
                localStorage.allUsers = JSON.stringify(Users)
            }
    
            
        }
        alert("Evento removido")

        location.reload()

    })
    
}