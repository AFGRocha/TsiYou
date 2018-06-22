window.onload = function() {

    storage()
    account()
   renderDocentes()
    
}






function renderDocentes(){

    let divDocente = document.getElementById("Docentes")

    let counter = 0
    let str = ""
  
        for(let i = 0; i < Users.length; i++){

            if (Users[i].docente == 1) {
                
                divDocente.innerHTML = ""
    

                if( counter == 0){
                    str += '<div class="row">'
                }

                counter++
    
                
                
                
                str += '<div class="col-sm-12 col-md-4 col-lg-4">'
                str += '<div class="card" style="width: 18rem;">'
                str += '<img class="card-img-top" src="' + Users[i].image + '"height="350" width="370" alt="Card image cap">'
                str += '<div class="card-body">'
                str += '<h5 class="card-title text-dark">' + Users[i].name + '</h5>'   
                str += '</div></div></div>'
                
               
                
                divDocente.innerHTML = str
            }
    
            if(counter == 3){
            
                counter = 0

                str += '</div><br><br>'
                divDocente.innerHTML = str
            }
        }
    
}