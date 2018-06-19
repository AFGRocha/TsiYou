window.onload = function() {

    storage()
    account()
    renderThisEvent()
}



function renderThisEvent(){

    let myEvent = JSON.parse(localStorage.openEvent)
    let openEventTitle = document.getElementById("openEventTitle")
    let openEventImage = document.getElementById("openEventImage")
    let openEventDesc = document.getElementById("openEventDesc")
    let openEventData = document.getElementById("openEventData")
    let openEventLocal = document.getElementById("openEventLocal")
    let openEventCategory = document.getElementById("openEventCategory")
    let openEventAccountable = document.getElementById("openEventAccountable")
    let divComment = document.getElementById("divComment")

    openEventTitle.innerHTML = myEvent._name
    openEventImage.src = myEvent._image
    openEventDesc.innerHTML = "Descrição: " + myEvent._desc
    openEventData.innerHTML = "Data e hora: " + myEvent._data + " " + myEvent._hour
    openEventLocal.innerHTML = "Local: " + myEvent._local
    openEventCategory.innerHTML ="Categoria:  " + myEvent._category
    openEventAccountable.innerHTML ="Responsável: " + myEvent._accountable


    //
       //Envia o comentario 
       let textComment = document.getElementById("textComment")
       let btnComment =  document.getElementById("btnComment")
   
       //Verificar se o evento ja ocorreu 
       

       let today = new Date();
       let d = today.getTime()
       console.log(d)
       let timeTime = Date.parse(myEvent._data)
       console.log("Milisegundos do evento: " + timeTime)

       if (localStorage.getItem("loggedUser")) {


           let slider = document.getElementById("myRange")
           let output = document.getElementById("demo")
           let txtScore = document.getElementById("txtScore")
           let txtValor = document.getElementById("txtValor")
           output.innerHTML = slider.value;
           
           slider.oninput = function() {
             output.innerHTML = this.value;
           }


           if(timeTime < d){
               textComment.style.display = ""
               btnComment.style.display = ""
               slider.style.display = "inline"
               output.style.display = "inline"
               txtScore.style.display = "inline"
               txtValor.style.display = "inline"
           }

           else{
               textComment.style.display = "none"
               btnComment.style.display = "none"
               slider.style.display = "none"
               output.style.display = "none"
               txtScore.style.display = "none"
               txtValor.style.display = "none"
           }
           btnComment.addEventListener("click", function (event) {
        
               event.preventDefault()
               if(textComment.value == ""){
                   alert("Escreva algo no comentário")
               }
               
               else{
                   let currentUser  = JSON.parse(localStorage.loggedUser)
                   let newComment = new Comment(currentUser.name,currentUser.image,textComment.value)
                   myEvent.comments.push(newComment)
                   localStorage.openEvent = JSON.stringify(myEvent)

                   for(let i = 0; i < Events.length;i++){

                    if(Events[i]._name == myEvent._name){
                        Events[i] = myEvent
                        console.log(Events[i])
                    }
                   }

                   localStorage.allEvents = JSON.stringify(Events)
                   alert("Comentário feito")
                   location.reload()
               }


           })
       }

   //Carrega os comentarios do evento
       divComment.innerHTML = ""
       let str = ""

       for(let j = 0; j < myEvent.comments.length; j++){
   
           console.log("teste")
           str += '<div class="col-sm-12 col-md-12 col-lg-12">'
           if(myEvent.comments[j]._image == ""){
               str += '<img class="rounded float-left marginimg" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" style="width:70px" alt="Card image cap">' 
           }
           else{
               str += '<img class="rounded float-left marginimg" src="' + myEvent.comments[j]._image + '" style="width:50px" alt="Card image cap">'
           }
           
           str += '<h5 class="card-title text-dark">' + myEvent.comments[j]._user + '</h5>'  
           str += '<p class="card-title text-dark">' + myEvent.comments[j]._text  + '</p>' 
           str += '</div><br>'
   
          divComment.innerHTML = str
       }
}