window.onload = function() {

    console.log("events.js loaded")
    let control = document.title
    console.log("Loaded: " + control)
    storage()
    account()
    eventPage()
    addToMyEvents()

    
   // init()

   if (localStorage.getItem("loggedUser")) {
       renderRec()
   }
}
        
 
function eventPage(){
    renderEvents()

     //Butao de evento ativar caso o admin ou docente venham de outra pagina
    if (localStorage.getItem("loggedUser")) {

        let currentUser  = JSON.parse(localStorage.loggedUser)
    
        if (currentUser.admin == 1 || currentUser.docente == 1){
            document.getElementById("btnAddEvent").style.display = 'inline'
        }
    }



    //Adicionar eventos
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
    let tagStr = ""

    for(let i = 0; i < Users.length; i++){

        if (Users[i].docente == 1) {
            eventAccountable.innerHTML = ""

            //<option value="saab">Eventos mais recentes</option>
            docStr += '<option value="' + Users[i].name + '">' + Users[i].name +'</option>'

            eventAccountable.innerHTML = docStr
        }
    }

    for(let i = 0; i < allTags.length; i++){
        eventCategory.innerHTML=""

        tagStr += '<option value="' + allTags[i] + '">' + allTags[i]+'</option>'
        eventCategory.innerHTML = tagStr
        console.log(allTags)
    }


    addEvent.addEventListener("submit", function (event) {
        
        event.preventDefault()

        let newEvent = new Event(eventName.value,eventDesc.value,eventDate.value,eventTime.value,eventLocal.value,"-" + eventCategory.value,eventAccountable.value,eventPic.value)
        Events.push(newEvent)   
        console.log(Events)
        renderEvents()
        console.log(allTags.indexOf(eventCategory.value))

      /*  if(allTags.indexOf(eventCategory.value) ==-1){
            console.log("New tag added: "+ eventCategory.value)
            let tagBackup = allTags
            allTags = []
            tagBackup.push(eventCategory.value)
            allTags.push(eventCategory.value)
            renderTags()
            allTags = tagBackup
            console.log("Tags fixed: " + allTags)
            let localTags = localStorage.getItem("savedTags")
            let myTagsArray = JSON.parse(localTags)
            myTagsArray.push(eventCategory.value)
            localStorage.savedTags = JSON.stringify(myTagsArray)
        } */

        let localEvents = localStorage.getItem("allEvents")
        let myEventsArray  = JSON.parse(localEvents)
        myEventsArray.push(newEvent)
        localStorage.allEvents = JSON.stringify(myEventsArray)

        $('#addEventModal').modal('hide');
        addEvent.reset()
    })

    //Render Tags 
     renderTags()
    //Filtrar eventos 

    let btnSearch = document.getElementById("btnSearch")
    let eventFilter = document.getElementById("eventFilter")

    btnSearch.addEventListener("click", function(){


        //Filtro todos
        if(eventFilter.value == "todos"){
            renderEvents()
            renderRec()
        }

        //Filtro recentes
        if(eventFilter.value == "recentes"){
            Events.reverse()
            renderEvents()
        }

        //Filtro melhor pontuado

        if(eventFilter.value == "melhor"){
            
            let backupArray = Events

            function compare(a,b) {
                if (a.average < b.average){
                    return 1;
                }
                  
                if (a.average > b.average){
                    return -1;
                }  
                return 0;
              }

              backupArray.sort(compare)

              console.log(backupArray)
              Events = backupArray
              renderEvents()
              
        }

        //Filtro realizados
        if(eventFilter.value == "realizados"){

            let today = new Date();
            let d = today.getTime()
            console.log(d)
            let tempEventArray = []
            let backupArray = Events
            console.log(backupArray)

            for(let i = 0; i < Events.length;i++){

                let timeTime = Date.parse(Events[i]._data)
                console.log("Milisegundos do evento: " + timeTime)

                if(timeTime < d){
                    tempEventArray.push(Events[i])
                }

            }

            Events = tempEventArray

            renderEvents()
            Events = backupArray
        }

        //Filtro a realizar
        if(eventFilter.value == "realizar"){

            let today = new Date();
            let d = today.getTime()
            console.log(d)
            let tempEventArray = []
            let backupArray = Events
            console.log(backupArray)

            for(let i = 0; i < Events.length;i++){

                let timeTime = Date.parse(Events[i]._data)
                    console.log("Milisegundos do evento: " + timeTime)

                if(timeTime > d){
                    tempEventArray.push(Events[i])
                }

            }

            Events = tempEventArray

            renderEvents()
            Events = backupArray
        }

        //Filtrar por tag

        if(eventFilter.value == "tagID"){
            
           let selectedTag =  eventFilter.selectedIndex
           let thisTag = eventFilter.options[selectedTag].text;
           console.log(eventFilter.selectedIndex)
           console.log(thisTag)

            let tempEventArray = []
            let backupArray = Events

            for(let i = 0; i < Events.length;i++){

                

                if(Events[i]._category ==  thisTag){
                    tempEventArray.push(Events[i])
                    console.log("Entrou no if")
                }

            }

            Events = tempEventArray

            renderEvents()
            Events = backupArray
        }
    })


    
   

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
            str += '<img class="card-img-top" src="' + Events[i]._image + '" alt="Card image cap">'
            str += '<div class="card-body">'
            str += '<h5 class="card-title text-dark">' + Events[i]._name + '</h5>'  
            str += '<p class="card-title text-dark">' + Events[i]._data + '</p>' 
            str += '<p class="card-title text-dark">' + Events[i]._local + '</p>'  
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

            openEventTitle.innerHTML = Events[i]._name
            openEventImage.src = Events[i]._image
            openEventDesc.innerHTML = "Descrição: " + Events[i]._desc
            openEventData.innerHTML = "Data e hora: " + Events[i]._data + " " + Events[i]._hour
            openEventLocal.innerHTML = "Local: " + Events[i]._local
            openEventCategory.innerHTML ="Categoria:  " + Events[i]._category
            openEventAccountable.innerHTML ="Responsável: " + Events[i]._accountable
            
            
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


//Lista de tags, adiciona as tags ao select com todos os filtros

function renderTags(){
    let eventFilter = document.getElementById("eventFilter")
    let str = ""
    str = eventFilter.innerHTML

    for(let i = 0; i < allTags.length;i++){
        
        str += '<option class="teste" value="tagID">-' + allTags[i] + '</option>'
        
    }

    eventFilter.innerHTML = str
}


function addToMyEvents(){

    let addMyEvent = document.getElementById("addMyEvent")
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

    //Ativa o butão adicionar evento
    if (localStorage.getItem("loggedUser")) {
        addMyEvent.style.display = "inline"
    }

    //Adiciona o evento ao lista de eventos do utilizador
    addMyEvent.addEventListener("click", function(){
         
        let currentUser  = JSON.parse(localStorage.loggedUser)

        for(let i = 0; i < currentUser.myEvents.length;i++){


            if(currentUser.myEvents[i]._name == Events[selectedEvent]._name ){

                duplicate = -1
                break
            }

        }
        
        if(duplicate == 0){
            currentUser.myEvents.push(Events[selectedEvent])
            currentUser.myTags.push(Events[selectedEvent]._category)

            console.log(currentUser)
    
            //Update ao local Storage
            localStorage.loggedUser = JSON.stringify(currentUser)
    
            for(let i = 0; i < Users.length;i++){
    
    
                 if(Users[i]._username == currentUser._username ){
    
                     Users[i] = currentUser
                     localStorage.allUsers = JSON.stringify(Users)
                 }
    
             }
    
            alert(Events[selectedEvent]._name + " adicionado aos seus eventos")
        }

        else{
            alert("Já adicionou este evento")
            duplicate = 0
        }
        

    })
    
}


function renderRec(){

    let divRec = document.getElementById("recomendar")
    let recTxt = document.getElementById("recTxt")
    let recArray = []

    //recTxt.innerHTML = "Recomendações"
    

    if (localStorage.getItem("loggedUser")) {
        let currentUser  = JSON.parse(localStorage.loggedUser)

        for(let i = 0; i < currentUser.myTags.length;i++){
            for(let j = 0; j < Events.length; j++){
                if(currentUser.myTags[i] == Events[j]._category){
                    recArray.push(Events[j])
                }
            }
        }
    }

    let str = "<center><p class='tsiyou-title text-white'>Recomendações</p></center>"
    
    let counter = 0
    let eventCounter = 0
    for(let i = 0; i < recArray.length; i++){

       
            divRec.innerHTML = ""

            if( counter == 0){
                str += '<div class="row">'
            }


            counter++
           
            
            
            str += '<div class="col-sm-12 col-md-4 col-lg-4">'
            str += '<div class="card" style="width: 18rem;">'
            str += '<img class="card-img-top" src="' + recArray[i]._image + '" alt="Card image cap">'
            str += '<div class="card-body">'
            str += '<h5 class="card-title text-dark">' + recArray[i]._name + '</h5>'  
            str += '<p class="card-title text-dark">' + recArray[i]._data + '</p>' 
            str += '<p class="card-title text-dark">' + recArray[i]._local + '</p>'  
            str += '<br><center><input type="button" data-toggle="modal" data-target="#eventModal" class="btn btn-b4 openEvent2" value="Ver mais" id="'+ eventCounter + '"></center>' 
            str += '</div></div></div>'

            divRec.innerHTML = str
            eventCounter++
            
            if (counter == 3){
                counter = 0

                str += '</div><br><br>'

            divRec.innerHTML = str

            }
        }


          //Abrir modal do Evento
      let btnOpen = document.getElementsByClassName("openEvent2")


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

            openEventTitle.innerHTML = Events[i]._name
            openEventImage.src = Events[i]._image
            openEventDesc.innerHTML = "Descrição: " + Events[i]._desc
            openEventData.innerHTML = "Data e hora: " + Events[i]._data + " " + Events[i]._hour
            openEventLocal.innerHTML = "Local: " + Events[i]._local
            openEventCategory.innerHTML ="Categoria:  " + Events[i]._category
            openEventAccountable.innerHTML ="Responsável: " + Events[i]._accountable
            
            
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