window.onload = function() {

    let control = document.title
    console.log("Loaded: " + control)
    storage()
    account()
    renderTestimonials()
    renderDocentes()
    renderPartners()

 
        document.getElementsByTagName("BODY")[0].onresize = function() {
            let w = window.innerWidth;
            let h = window.innerHeight;
            console.log("Largura atual da página: " + w)
            console.log("Altura atual da página: " + h)
            renderDocentes()
            renderPartners()
            renderTestimonials()
        } 
}


//Lista de docentes


function renderDocentes(){

    let divDocente = document.getElementById("Docentes")

    let counter = 0
    divDocente.innerHTML = ""
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
                str += '<img class="card-img-top" src="' + Users[i].image + '"height="350" width="370" alt="Card image cap">'
                str += '<div class="card-body">'
                str += '<h5 class="card-title text-dark">' + Users[i].name + '</h5>'   
                str += '</div></div></div>'
                
               
                
                divDocente.innerHTML = str
            }
    
            if(counter == 3){
            
                str += '</div>'
                divDocente.innerHTML = str
                counter = 0
    
                break
            }
        }
    }
    


    else if(w < 1000 && w > 767){
        for(let i = 0; i < Users.length; i++){

            if (Users[i].docente == 1) {
                divDocente.innerHTML = ""
    
                counter++
    
                
                
                
                str += '<div class="col-sm-12 col-md-6 col-lg-6">'
                str += '<div class="card" style="width: 18rem;">'
                str += '<img class="card-img-top" src="' + Users[i].image + '" height="350" width="370" alt="Card image cap">'
                str += '<div class="card-body">'
                str += '<h5 class="card-title text-dark">' + Users[i].name + '</h5>'   
                str += '</div></div></div>'
                
               
                
                divDocente.innerHTML = str
            }
    
            if(counter == 2){
            
                str += '</div><br><br>'
                divDocente.innerHTML = str
                counter = 0
    
                break
            }
        }
    }

    else if(w < 767){
        for(let i = 0; i < Users.length; i++){

            if (Users[i].docente == 1) {
                divDocente.innerHTML = ""
    
                str += '<div class="col-sm-12 col-md-6 col-lg-6">'
                str += '<div class="card" style="width: 18rem;">'
                str += '<img class="card-img-top" src="' + Users[i].image + '"height="350" width="370" alt="Card image cap">'
                str += '<div class="card-body">'
                str += '<h5 class="card-title text-dark">' + Users[i].name + '</h5>'   
                str += '</div></div></div></div>'
                
               
                
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
    let w = window.innerWidth;
    let h = window.innerHeight;

    
    str += '<div class="row">'
    //str += '<div class="col-md-2 col-lg-2"></div>'
    if (w >= 1000){
        for(let i = 0; i < Partners.length; i++){

        
            divPartners.innerHTML = ""

            counter++

            
            
            
            str += '<div class="col-sm-4 col-md-4 col-lg-4">'
            str += '<center><img src="' + Partners[i]._image + '" width="300px" style="position:relative"></center>'

            str += '</div><br><br>'
            //str += '<div class="col-md-1 col-lg-1"></div>'
           
            
            divPartners.innerHTML = str
        

        if(counter == 3){
        
            str += '</div>'
            divPartners.innerHTML = str

            break
            }
        }
    }

    else if(w < 1000 && w > 767){  
        for(let i = 0; i < Partners.length; i++){

        
        divPartners.innerHTML = ""

        counter++

        
        
        
        str += '<div class="col-sm-12 col-md-6 col-lg-6">'
        str += '<center><img src="' + Partners[i]._image + '" width="300px" style="position:relative"></center>'

        str += '</div><br><br>'
        //str += '<div class="col-md-1 col-lg-1"></div>'
       
        
        divPartners.innerHTML = str
    

    
        if(counter == 2){
    
        str += '</div>'
        divPartners.innerHTML = str

        break
            }
        }
    }

    else if(w < 767){
        for(let i = 0; i < Partners.length; i++){

        
            divPartners.innerHTML = ""
    
            counter++
    
            
            
            
            str += '<div class="col-sm-12 col-md-6 col-lg-6">'
            str += '<center><img src="' + Partners[i]._image + '" width="300px" style="position:relative"></center>'
    
            str += '</div><br><br>'
            //str += '<div class="col-md-1 col-lg-1"></div>'
           
            
            divPartners.innerHTML = str
        
    
        
            if(counter == 1){
        
            str += '</div>'
            divPartners.innerHTML = str
    
            break
                }
            }
    }
}

function renderTestimonials(){
    let divTest = document.getElementById("Testemunhos")

    let str = ""
    let w = window.innerWidth;
    let h = window.innerHeight;

    let counter = 0

    if(w > 1359){
        for(let i = 0; i < Testimonials.length; i++){

       
            divTest.innerHTML = ""

            if( counter == 0){
                str += '<div class="row">'
            }


            counter++
            
            str += '<div class="col-sm-12 col-md-6 col-lg-6">'
            str += '<div class="card" style="width: 40rem;">'
            str += '<div class="card-body">'
            if(Testimonials[i]._image == ""){
                str += "<img id='profilePhoto' style='float: left; margin-right:10px' width='250' alt='Image' src='https://www.w3schools.com/bootstrap4/img_avatar3.png'>"
            }
           
            else{
                str += "<img id='profilePhoto' style='float: left; margin-right:10px' width='250' alt='Image' src='" + Testimonials[i]._image + "'>"
            }
            str += '<h5 class="text-dark">' + Testimonials[i]._user + '</h5>'  
            str += '<p class="card-title text-dark">' + Testimonials[i]._text + '</p>'  
            str += '</div></div></div>'

            divTest.innerHTML = str
            
            if (counter == 2){
                counter = 0

                str += '</div><br><br>'
                break

            divTest.innerHTML = str

            }
        }
    }
   
    
    else if(w < 1359 && w >760){
        for(let i = 0; i < Testimonials.length; i++){

       
            divTest.innerHTML = ""

            if( counter == 0){
                str += '<div class="row">'
            }


            counter++
            
            str += '<div class="col-sm-12 col-md-12 col-lg-12">'
            str += '<div class="card" style="width: 40rem;">'
            str += '<div class="card-body">'
            if(Testimonials[i]._image == ""){
                str += "<img id='profilePhoto' style='float: left; margin-right:10px' width='250' alt='Image' src='https://www.w3schools.com/bootstrap4/img_avatar3.png'>"
            }
           
            else{
                str += "<img id='profilePhoto' style='float: left; margin-right:10px' width='250' alt='Image' src='" + Testimonials[i]._image + "'>"
            }
            str += '<h5 class="text-dark">' + Testimonials[i]._user + '</h5>'  
            str += '<p class="card-title text-dark">' + Testimonials[i]._text + '</p>'  
            str += '</div></div></div>'

            divTest.innerHTML = str
            
            if (counter == 1){
                counter = 0

                str += '</div><br><br>'
                break

            divTest.innerHTML = str

            }
        }
    }

    else if(w < 760 && w > 656){
        for(let i = 0; i < Testimonials.length; i++){

       
            divTest.innerHTML = ""

            if( counter == 0){
                str += '<div class="row">'
            }


            counter++
            
            str += '<div class="col-sm-12 col-md-12 col-lg-12">'
            str += '<div class="card" style="width: 30rem;">'
            str += '<div class="card-body">'
            if(Testimonials[i]._image == ""){
                str += "<img id='profilePhoto' style='float: left; margin-right:10px' width='250' alt='Image' src='https://www.w3schools.com/bootstrap4/img_avatar3.png'>"
            }
           
            else{
                str += "<img id='profilePhoto' style='float: left; margin-right:10px' width='250' alt='Image' src='" + Testimonials[i]._image + "'>"
            }
            str += '<h5 class="text-dark">' + Testimonials[i]._user + '</h5>'  
            str += '<p class="card-title text-dark">' + Testimonials[i]._text + '</p>'  
            str += '</div></div></div>'

            divTest.innerHTML = str
            
            if (counter == 1){
                counter = 0

                str += '</div><br><br>'
                break

            divTest.innerHTML = str

            }
        }
    }


    else if(w < 656 && w > 410){
        for(let i = 0; i < Testimonials.length; i++){

       
            divTest.innerHTML = ""

            if( counter == 0){
                str += '<div class="row">'
            }


            counter++
            
            str += '<div class="col-sm-12 col-md-12 col-lg-12">'
            str += '<div class="card" style="width: 25rem;">'
            str += '<div class="card-body">'
            if(Testimonials[i]._image == ""){
                str += "<img id='profilePhoto' style='float: left; margin-right:10px' width='200' alt='Image' src='https://www.w3schools.com/bootstrap4/img_avatar3.png'>"
            }
           
            else{
                str += "<img id='profilePhoto' style='float: left; margin-right:10px' width='200' alt='Image' src='" + Testimonials[i]._image + "'>"
            }
            str += '<h5 class="text-dark">' + Testimonials[i]._user + '</h5>'  
            str += '<p class="card-title text-dark">' + Testimonials[i]._text + '</p>'  
            str += '</div></div></div>'

            divTest.innerHTML = str
            
            if (counter == 1){
                counter = 0

                str += '</div><br><br>'
                break

            divTest.innerHTML = str

            }
        }
    }
   

    
    else if(w <= 410){
        for(let i = 0; i < Testimonials.length; i++){

       
            divTest.innerHTML = ""

            if( counter == 0){
                str += '<div class="row">'
            }


            counter++
            
            str += '<div class="col-sm-12 col-md-12 col-lg-12">'
            str += '<div class="card" style="width: 20rem;">'
            str += '<div class="card-body">'
            if(Testimonials[i]._image == ""){
                str += "<img id='profilePhoto' style='float: left; margin-right:10px' width='150' alt='Image' src='https://www.w3schools.com/bootstrap4/img_avatar3.png'>"
            }
           
            else{
                str += "<img id='profilePhoto' style='float: left; margin-right:10px' width='150' alt='Image' src='" + Testimonials[i]._image + "'>"
            }
            str += '<h5 class="text-dark">' + Testimonials[i]._user + '</h5>'  
            str += '<p class="card-title text-dark">' + Testimonials[i]._text + '</p>'  
            str += '</div></div></div>'

            divTest.innerHTML = str
            
            if (counter == 1){
                counter = 0

                str += '</div><br><br>'
                break

            divTest.innerHTML = str

            }
        }
    }
    
}
