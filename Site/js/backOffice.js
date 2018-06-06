window.onload = function() {
    console.log("Ola")
    hidingTables()
    storage()
    //account()
    tabela()
}

function hidingTables() {
    let userTbl = document.getElementById("Users")
    let eventTbl = document.getElementById("Events")
    let partnerTbl = document.getElementById("Partners")
    let tblUser = document.getElementById("tblUser")
    let tblEvent = document.getElementById("tblEvent")
    let tblPartner = document.getElementById("tblPartner")

    

    userTbl.addEventListener("click", function(event) { 

        event.preventDefault()

        if(tblUser.style.display === "none")
            tblEvent.style.display = "none"
            tblPartner.style.display = "none"
            tblUser.style.display = "block"
            
    })
    
    eventTbl.addEventListener("click", function(event) { 

        event.preventDefault()

        if(tblEvent.style.display === "none")
            tblUser.style.display = "none"
            tblPartner.style.display = "none"
            tblEvent.style.display = "block"
    })

    partnerTbl.addEventListener("click", function(event) { 

        event.preventDefault()

        if(tblPartner.style.display === "none")
            tblEvent.style.display = "none"
            tblUser.style.display = "none"
            tblPartner.style.display = "block"
    })
}


function tabela(){
    
    let tblUser = document.getElementById("tblUser")

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
   
               tabela()

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

            tabela()

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

            tabela()

           })
       }

}