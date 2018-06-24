window.onload = function() {

    storage()
    account()
    renderTestimonials()
    document.getElementsByTagName("BODY")[0].onresize = function() {
        let w = window.innerWidth;
        let h = window.innerHeight;
        console.log("Largura atual da página: " + w)
        console.log("Altura atual da página: " + h)
        renderTestimonials()
    };
    
    sendTest()
    if (localStorage.getItem("loggedUser")) {
        let currentUser = JSON.parse(localStorage.loggedUser)

        if(currentUser.docente == 1){
            document.getElementById("addTest").style.display = "none"
        }

        else{
            document.getElementById("addTest").style.display = "inline"
        }
        
    }
}


//Lista de eventos

function renderTestimonials(){
    let divTest = document.getElementById("divTest")

    let str = ""
    
    let counter = 0
    let w = window.innerWidth
    let h = window.innerHeight

    if (w >= 1300){
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

            divTest.innerHTML = str

            }
        }
    }

    if (w <= 1300 && w > 656){
        for(let i = 0; i < Testimonials.length; i++){

       
            divTest.innerHTML = ""
            
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
            str += '</div></div></div><br><br>'

            divTest.innerHTML = str

        }
    }

    else if(w < 656 && w > 410){
    
         for(let i = 0; i < Testimonials.length; i++){

       
            divTest.innerHTML = ""
            
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
            str += '</div></div></div><br><br>'

            divTest.innerHTML = str

        }
    }


    else if(w <= 410){
        for(let i = 0; i < Testimonials.length; i++){

       
            divTest.innerHTML = ""
            
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
            str += '</div></div></div><br><br>'

            divTest.innerHTML = str

        }
    }
 }


    function sendTest(){
        
    let btnSend = document.getElementById("addMyTest")
    let textTest = document.getElementById("textTest")
    let currentUser = JSON.parse(localStorage.loggedUser)

    

   

    btnSend.addEventListener("click", function(){

        if(textTest.value != ""){
            
            
            let newTest = new Testimonial(currentUser.name,currentUser.image,textTest.value)
    
            if(localStorage.getItem("sentTest")){
                let getTest = JSON.parse(localStorage.sentTest)
                getTest.push(newTest)
                localStorage.sentTest = JSON.stringify(getTest)
                console.log(newTest)
                alert("Testemunho enviado")
                location.reload()
            }
      
            else{
                let storeTest = []
                storeTest.push(newTest)
                localStorage.sentTest = JSON.stringify(storeTest)
                console.log(newTest)
                alert("Testemunho enviado")
                location.reload()
            }
        }

        else{
            alert("Porfavor escreva algo!")
        }

    

    })
 
    }
