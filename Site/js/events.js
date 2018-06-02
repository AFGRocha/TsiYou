window.onload = function() {

    console.log("events.js loaded")
    let control = document.title
    console.log("Loaded: " + control)
    storage()
    account()
    eventPage()
   // init()

    
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

        let newEvent = new Event(eventName.value,eventDesc.value,eventDate.value,eventTime.value,eventLocal.value,"-" + eventCategory.value,eventAccountable.value,eventPic.value)
        Events.push(newEvent)   
        console.log(Events)
        renderEvents()
        console.log(allTags.indexOf(eventCategory.value))

        if(allTags.indexOf(eventCategory.value) ==-1){
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
        }

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
        }

        //Filtro recentes
        if(eventFilter.value == "recentes"){
            Events.reverse()
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
      /* 
     <div class="modal-body">
        <p id ="openEventImage"></p>
        <p id="openEventDesc"></p>
        <p id="openEventData"></p>
        <p id="openEventLocal"></p>
        <p id="openEventCategory"></p>
        <p id="openEventAccountable"></p>
      </div>
      */


      for(let i = 0; i < btnOpen.length; i++){
          btnOpen[i].addEventListener("click", function(){

            let openEventTitle = document.getElementById("openEventTitle")
            let openEventImage = document.getElementById("openEventImage")
            let openEventDesc = document.getElementById("openEventDesc")
            let openEventData = document.getElementById("openEventData")
            let openEventLocal = document.getElementById("openEventLocal")
            let openEventCategory = document.getElementById("openEventCategory")
            let openEventAccountable = document.getElementById("openEventAccountable")

            openEventTitle.innerHTML = Events[i]._name
            openEventImage.src = Events[i]._image
            openEventDesc.innerHTML = "Descrição: " + Events[i]._desc
            openEventData.innerHTML = "Data e hora: " + Events[i]._data + " " + Events[i]._hour
            openEventLocal.innerHTML = "Local: " + Events[i]._local
            openEventCategory.innerHTML ="Categoria:  " + Events[i]._category
            openEventAccountable.innerHTML ="Responsável: " + Events[i]._accountable

        

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