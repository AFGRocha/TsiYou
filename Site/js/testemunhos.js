window.onload = function() {

    storage()
    account()
    renderTestimonials()
}


//Lista de eventos

function renderTestimonials(){
    let divTest = document.getElementById("divTest")

    let str = ""
    
    let counter = 0
    let eventCounter = 0
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
            eventCounter++
            
            if (counter == 2){
                counter = 0

                str += '</div><br><br>'

            divTest.innerHTML = str

            }
        }
    
    }
