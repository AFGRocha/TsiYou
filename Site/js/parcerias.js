window.onload = function() {

    storage()
    account()
   renderPartners()
    
}


function renderPartners(){

    let divPartners = document.getElementById("Parcerias")

    let counter = 0
    let str = ""

    
    for(let i = 0; i < Partners.length; i++){

        
            divPartners.innerHTML = ""


            if( counter == 0){
                str += '<div class="row">'
            }


            counter++

            
            
            
            str += '<div class="col-sm-4 col-md-4 col-lg-4">'
            str += '<center><img src="' + Partners[i]._image + '" width="300px"></center>'

            str += '</div>'
            //str += '<div class="col-md-1 col-lg-1"></div>'
           
            
            divPartners.innerHTML = str
        

        if(counter == 3){
        
            counter = 0
            str += '</div><br><br>'
            divPartners.innerHTML = str

            
        }
    }
}