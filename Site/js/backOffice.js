window.onload = function() {
    console.log("Ola")
    renderTables()
    storage()
    //account()
    tableUsers()
}

function renderTables() {
    let userTbl = document.getElementById("Users")
    let eventTbl = document.getElementById("Events")
    let partnerTbl = document.getElementById("Partners")
    let testTbl = document.getElementById("Testemunhos")
    let tagTbl =  document.getElementById("Categorias")
    let tblUser = document.getElementById("tblMain")
    let tblTest = document.getElementById("tblTest")
    let addTag = document.getElementById("addTag")
    let btnAddPartner = document.getElementById("btnAddPartner")
    let btnTag = document.getElementById("btnTag")
    let txtTag = document.getElementById("txtTag")

    

    userTbl.addEventListener("click", function(event) { 

        event.preventDefault()
        btnAddPartner.style.display = 'none'
        tblTest.style.display = 'none'
        addTag.style.display = 'none'
            tableUsers()
            
    })
    
    eventTbl.addEventListener("click", function(event) { 

        event.preventDefault()
        btnAddPartner.style.display = 'none'
        tblTest.style.display = 'none'
        addTag.style.display = 'none'
        tableEvents()
    })

    partnerTbl.addEventListener("click", function(event) { 

        event.preventDefault()
        btnAddPartner.style.display = 'inline'
        tblTest.style.display = 'none'
        addTag.style.display = 'none'
        tablePartners()
    })

    
    testTbl.addEventListener("click", function(event) { 

        event.preventDefault()
        btnAddPartner.style.display = 'none'
        tblTest.style.display = ""
        addTag.style.display = 'none'
           tableSentTest()
           tableTest()
            
    })

    tagTbl.addEventListener("click", function(event) { 

        event.preventDefault()
        btnAddPartner.style.display = 'none'
        tblTest.style.display = 'none'
        addTag.style.display = ''
        tableTag()
        newTag()
    })
}


function tableUsers(){
    
    let tblUser = document.getElementById("tblMain")

       //Clear na tabela
       tblUser.innerHTML = ""

       //Counter responsavel por identificar os users
       let counter = 0

       //string com o que vai conter a tabela
       let str = ""
       str = "<thead class='thead-dark'><tr><th>Código</th><th>Nome</th><th>Username</th><th>Password</th><th>Docente</th><th>Admin</th><th>Email</th><th>Foto</th><th>Ações</th></tr></thead><tbody>"

       //Atualiza a tabela com o conteudo do array Users
       for (let i = 0; i < Users.length;i++){
           str += "<tr>"
           str += "<td>" + Users[i]._id + "</td>"
           str += "<td>" + Users[i].name + "</td>"
           str += "<td>" + Users[i]._username + "</td>"
           str += "<td>" + Users[i]._password + "</td>"
           
           if(Users[i].docente == 1){
            str += "<td>True</td>"
           }
           else{
            str += "<td>False</td>"
           }

           if(Users[i].admin == 1){
            str += "<td>True</td>"
           }
           else{
            str += "<td>False</td>"
           }
           
           str += "<td>" + Users[i]._email + "</td>"
           str += "<td><img src='" + Users[i].image + "'></td>"

           if (Users[i].docente == 1 && Users[i].admin == 1 ) {
            str += "<td><input type='button' class='remover' value='Remover' id='"+ counter + "'><input type='button' class='addDoc' value='Retirar Docente' id='"+ counter + "'><input type='button' class='addMin' value='Retirar Admin' id='"+ counter + "'></td>"
           }

           else if (Users[i].docente == 1 && Users[i].admin == 0 ) {
            str += "<td><input type='button' class='remover' value='Remover' id='"+ counter + "'><input type='button' class='addDoc' value='Retirar Docente' id='"+ counter + "'><input type='button' class='addMin' value='Tornar Admin' id='"+ counter + "'></td>"
           }

           else if (Users[i].docente == 0 && Users[i].admin == 1 ) {
            str += "<td><input type='button' class='remover' value='Remover' id='"+ counter + "'><input type='button' class='addDoc' value='Tornar Docente' id='"+ counter + "'><input type='button' class='addMin' value='Retirar Admin' id='"+ counter + "'></td>"
           }

           else{
            str += "<td><input type='button' class='remover' value='Remover' id='"+ counter + "'><input type='button' class='addDoc' value='Tornar Docente' id='"+ counter + "'><input type='button' class='addMin' value='Tornar Admin' id='"+ counter + "'></td>"  
           }


           
           str +="</tr>"
           counter++
       }
       
       tblUser.innerHTML = str

       //Cria o butao remover que remove o respetivo user de acordo o seu ID
       let remove = document.getElementsByClassName("remover")


       for(let i = 0; i < remove.length; i++){
           remove[i].addEventListener("click", function(){

               console.log(remove[i].id)
   
               let delet = parseInt(remove[i].id)
   
               Users.splice(delet,1)

               localStorage.allUsers = JSON.stringify(Users)
   
               tableUsers()

           }) 
       }
       
       let addDoc = document.getElementsByClassName("addDoc")

       for(let i = 0; i < addDoc.length;i++){
           addDoc[i].addEventListener("click",function(){

            console.log(addDoc[i].id)
            
   
            let userNum = parseInt(addDoc[i].id)


            console.log(Users[userNum])

            if(Users[userNum].docente == 1){
                Users[userNum].docente = 0
                
                alert(Users[userNum]._username + " não é docente")
            }

            else if(Users[userNum].docente == 0){
                Users[userNum].docente = 1
                
                alert(Users[userNum]._username + " é docente")
            }

            

            localStorage.allUsers = JSON.stringify(Users)

            tableUsers()

           })
       }



       let addMin = document.getElementsByClassName("addMin")

       for(let i = 0; i < addDoc.length;i++){
           addMin[i].addEventListener("click",function(){

            console.log(addMin[i].id)
            
   
            let userNum = parseInt(addMin[i].id)


            console.log(Users[userNum])

            if(Users[userNum].admin == 1){
                Users[userNum].admin = 0
                alert(Users[userNum]._username + " não é admin")
            }

            else if(Users[userNum].admin == 0){
                Users[userNum].admin = 1
                alert(Users[userNum]._username + " é admin")
            }

            

            localStorage.allUsers = JSON.stringify(Users)

            tableUsers()

           })
       }

}


function tableEvents(){

                let tblUser = document.getElementById("tblMain")

                //Clear na tabela
                tblUser.innerHTML = ""
         
                //Counter responsavel por identificar os users
                let counter = 0
         
                //string com o que vai conter a tabela
                let str = ""
                str = "<thead class='thead-dark'><tr><th>Código</th><th>Nome</th><th>Descrição</th><th>Data</th><th>Hora</th><th>Local</th><th>Categoria</th><th>Respónsavel</th><th>Imagem</th><th>Ações</th></tr></thead><tbody>"
         
                //Atualiza a tabela com o conteudo do array Events
                for (let i = 0; i < Events.length;i++){
                    str += "<tr>"
                    str += "<td>" + Events[i]._id + "</td>"
                    str += "<td>" + Events[i]._name + "</td>"
                    str += "<td>" + Events[i]._desc + "</td>"
                    str += "<td>" + Events[i]._data + "</td>"
                    str += "<td>" + Events[i]._hour + "</td>"
                    str += "<td>" + Events[i]._local + "</td>"
                    str += "<td>" + Events[i]._category + "</td>"
                    str += "<td>" + Events[i]._accountable + "</td>"
                    str += "<td><img src='" + Events[i]._image + "'></td>"
                    str += "<td><input type='button' class='remover' value='Remover' id='"+ counter + "'></td>"  
                    
         
         
                    
                    str +="</tr>"
                    counter++
                }
                
                tblUser.innerHTML = str
         
                //Cria o butao remover que remove o respetivo user de acordo o seu ID
                let remove = document.getElementsByClassName("remover")
         
         
                for(let i = 0; i < remove.length; i++){
                    remove[i].addEventListener("click", function(){
         
                        console.log(remove[i].id)
            
                        let delet = parseInt(remove[i].id)
            
                        Events.splice(delet,1)
         
                        localStorage.allEvents = JSON.stringify(Events)
            
                        tableEvents()
         
                    }) 
                }
}


function tablePartners(){

    let tblUser = document.getElementById("tblMain")

    //Clear na tabela
    tblUser.innerHTML = ""

    //Counter responsavel por identificar os users
    let counter = 0

    //string com o que vai conter a tabela
    let str = ""
    str = "<thead class='thead-dark'><tr><th>Código</th><th>Empresa / Instituição</th><th>Localização</th><th>Link</th><th>Imagem</th><th>Ações</th></tr></thead><tbody>"

    //Atualiza a tabela com o conteudo do array Events
    for (let i = 0; i < Partners.length;i++){
        str += "<tr>"
        str += "<td>" + Partners[i]._id + "</td>"
        str += "<td>" + Partners[i]._company + "</td>"
        str += "<td>" + Partners[i]._local + "</td>"
        str += "<td><a href=" + Partners[i]._link + ">" + Partners[i]._link + "<a></td>"
        str += "<td><img src='" + Partners[i]._image + "'></td>"
        str += "<td><input type='button' class='remover' value='Remover' id='"+ counter + "'></td>"  
        


        
        str +="</tr>"
        counter++
    }
    
    tblUser.innerHTML = str

    //Cria o butao remover que remove o respetivo user de acordo o seu ID
    let remove = document.getElementsByClassName("remover")


    for(let i = 0; i < remove.length; i++){
        remove[i].addEventListener("click", function(){

            console.log(remove[i].id)

            let delet = parseInt(remove[i].id)

            Partners.splice(delet,1)

            localStorage.allPartners = JSON.stringify(Partners)

            tablePartners()

        }) 
    }



    //Adicionar parcerias 
    let addPartner = document.getElementById("addPartner")
    let partnerName = document.getElementById("partnerName")
    let partnerLocal = document.getElementById("partnerLocal")
    let partnerLink = document.getElementById("partnerLink")
    let partnerPic = document.getElementById("partnerPic")

    addPartner.addEventListener("submit", function (event) {

        event.preventDefault()

        let newPartner = new Partner(partnerName.value,partnerLocal.value,partnerLink.value,partnerPic.value)
        Partners.push(newPartner)   
        tablePartners()
        console.log()
        console.log("chupp tbh")
        localStorage.allPartners = JSON.stringify(Partners)

        $('#addPartnerModal').modal('hide');
        addPartner.reset()
    })
}


function tableSentTest(){
    let tblUser = document.getElementById("tblMain")
   
    //Clear na tabela
    tblUser.innerHTML = ""

    //Counter responsavel por identificar os users
    let counter = 0

    //string com o que vai conter a tabela
    let str = ""
    str = "<thead class='thead-dark'><tr><th>Nome</th><th>Imagem</th><th>Testemunho</th><th>Ações</th></tr></thead><tbody>"

    if(localStorage.getItem("sentTest")){
        let sentTest = JSON.parse(localStorage.sentTest)
           //Atualiza a tabela com o conteudo do array
    for (let i = 0; i < sentTest.length;i++){
        console.log("Teste")
        str += "<tr>"
        str += "<td>" + sentTest[i]._user + "</td>"
        str += "<td>" + sentTest[i]._image + "</td>"
        str += "<td>" + sentTest[i]._text + "</td>"
        str += "<td><input type='button' class='aceitar' value='Aceitar' id='"+ counter + "'>" + "<input type='button' class='remover' value='Não Aceitar' id='"+ counter + "'></td>"
                
        str +="</tr>"
        counter++
    }
    
    tblUser.innerHTML = str

    //Cria o butao remover que remove o respetivo testemunho de acordo o seu ID
    let remove = document.getElementsByClassName("remover")


    for(let i = 0; i < remove.length; i++){
        remove[i].addEventListener("click", function(){

            console.log(remove[i].id)

            let delet = parseInt(remove[i].id)

            Partners.splice(delet,1)

            localStorage.allPartners = JSON.stringify(Partners)

            tableSentTest()

        }) 
    }

    let aceitar = document.getElementsByClassName("aceitar")

    for(let i = 0; i < aceitar.length; i++){
        aceitar[i].addEventListener("click", function(){

            console.log(aceitar[i].id)

            let delet = parseInt(aceitar[i].id)

            let getTest = JSON.parse(localStorage.savedTestimonials)
            getTest.push(sentTest[delet])
            Testimonials = getTest
            localStorage.savedTestimonials = JSON.stringify(Testimonials)

            sentTest.splice(delet,1)
            console.log(sentTest)

            localStorage.sentTest = JSON.stringify(sentTest)


            tableSentTest()

        }) 
    }
    }

 
}


function tableTest(){
    let tblUser = document.getElementById("tblTest")

    //Clear na tabela
    tblUser.innerHTML = ""
         
    //Counter responsavel por identificar os users
    let counter = 0
         
    //string com o que vai conter a tabela
    let str = ""
    str = "<thead class='thead-dark'><tr><th>Nome</th><th>Imagem</th><th>Testemunho</th><th>Ações</th></tr></thead><tbody>"
         
    //Atualiza a tabela com o conteudo do array Events
     for (let i = 0; i < Testimonials.length;i++){
     str += "<tr>"
     str += "<td>" + Testimonials[i]._user + "</td>"
     str += "<td><img src='" + Testimonials[i]._image + "'></td>"
     str += "<td>" + Testimonials[i]._text + "</td>"

    str += "<td><input type='button' class='remover' value='Remover' id='"+ counter + "'></td>"                  
                    
    str +="</tr>"
                   
    counter++
    
    }
                
        tblUser.innerHTML = str
         
        //Cria o butao remover que remove o respetivo user de acordo o seu ID
        let remove = document.getElementsByClassName("remover")
         
         
        for(let i = 0; i < remove.length; i++){
             remove[i].addEventListener("click", function(){
         
                console.log(remove[i].id)
            
                let delet = parseInt(remove[i].id)
            
                Testimonials.splice(delet,1)
         
                localStorage.savedTestimonials = JSON.stringify(Testimonials)
            
                tableTest()
         
            }) 
         }
}


function tableTag(){

    let tblUser = document.getElementById("tblMain")

    //Clear na tabela
    tblUser.innerHTML = ""

    //Counter responsavel por identificar os users
    let counter = 0

    //string com o que vai conter a tabela
    let str = ""
    str = "<thead class='thead-dark'><tr><th>Categoria</th><th>Ações</th></tr></thead><tbody>"

    //Atualiza a tabela com o conteudo do array Events
    for (let i = 0; i < allTags.length;i++){
        str += "<tr>"
        str += "<td>" + allTags[i] + "</td>"
        str += "<td><input type='button' class='remover' value='Remover' id='"+ counter + "'></td>"  
        str +="</tr>"
        counter++
    }
    
    str += "<p>Ao remover uma categoria ira remover todos os eventos dessa categoria</p>"
    tblUser.innerHTML = str

    //Cria o butao remover que remove o respetivo user de acordo o seu ID
    let remove = document.getElementsByClassName("remover")
    let backupArray = []


    for(let i = 0; i < remove.length; i++){
        remove[i].addEventListener("click", function(){

            console.log(remove[i].id)

            let delet = parseInt(remove[i].id)
            let currentTag = "-" + allTags[i]

            allTags.splice(delet,1)

            for(let j = 0; j < Events.length;j++){
                console.log("entrou no for")
                if(Events[j]._category != currentTag){
                        backupArray.push(Events[j])
                }
            }
            Events = backupArray

            localStorage.savedTags = JSON.stringify(allTags)
            localStorage.allEvents = JSON.stringify(Events)
            tableTag()

        }) 
    }
}

function newTag(){
    btnTag.addEventListener("click", function(){

        allTags.push(txtTag.value)
        localStorage.savedTags = JSON.stringify(allTags)
        txtTag.reset
        alert("Categoria adicionada")
        tableTag()

    }) 

}
