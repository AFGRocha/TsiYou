window.onload = function() {

    storage()
    account()
    renderUser()
    editUser()
}




function renderUser(){

    let profilePhoto  = document.getElementById("profilePhoto")
    let profileName = document.getElementById("profileName")
    let profileUsername = document.getElementById("profileUsername")
    let profileEmail = document.getElementById("profileEmail")
    let profileMyEvents = document.getElementById("profileMyEvents")
    let myForm = document.getElementById("formacao")
    let profileForm = document.getElementById("profileForm")
    let myUC = document.getElementById("UC")
    let profileUC = document.getElementById("profileUC")
    let myCV = document.getElementById("CV")
    let profileCV = document.getElementById("profileCV")
    let str = ""

    if (localStorage.getItem("loggedUser")) {
        let currentUser  = JSON.parse(localStorage.loggedUser)

        if(currentUser.image == ""){
            profilePhoto.src = "https://www.w3schools.com/bootstrap4/img_avatar3.png"
        }

        else{
            profilePhoto.src = currentUser.image
        }
        
        profileName.innerHTML= currentUser.name
        profileUsername.innerHTML = currentUser._username
        profileEmail.innerHTML = currentUser._email
        
        for(let i = 0; i < currentUser.myEvents.length;i++){

            str += currentUser.myEvents[i]._name +"; "
        }

        profileMyEvents.innerHTML = str

        if(currentUser.docente == 1){
            myForm.style.display=""
            profileForm.style.display=""
            myUC.style.display=""
            profileUC.style.display=""
            myCV.style.display=""
            profileCV.style.display=""

            profileForm.innerHTML = currentUser.formacao
            profileUC.innerHTML = currentUser.uc
            profileCV.innerHTML = currentUser.cv


        }
        
    }
}

function editUser(){
    let editName = document.getElementById("editName")
    let editUsername = document.getElementById("editUsername")
    let editPassword = document.getElementById("editPassword")
    let editEmail = document.getElementById("editEmail")
    let editPhoto = document.getElementById("editPhoto")
    let showPass = document.getElementById("showPass")
    let editProfile = document.getElementById("editProfile")
    let editForm = document.getElementById("editForm")
    let editUC = document.getElementById("editUC")
    let editCV = document.getElementById("editCV")
    let formForm = document.getElementById("formForm")
    let formUC = document.getElementById("formUC")
    let formCV = document.getElementById("formCV")


    if (localStorage.getItem("loggedUser")) {
        let currentUser  = JSON.parse(localStorage.loggedUser)


        if(currentUser.docente == 1){
            editForm.style.display = ""
            editUC.style.display = ""
            editCV.style.display = ""
            formForm.style.display = ""
            formUC.style.display = ""
            formCV.style.display = ""
        }

        editName.value = currentUser.name
        editUsername.value = currentUser._username
        editPassword.value = currentUser._password
        editEmail.value = currentUser._email
        editPhoto.value = currentUser.image
        editForm.value = currentUser.formacao
        editUC.value = currentUser.uc
        editCV.value = currentUser.cv

      

        
    }

    
    showPass.addEventListener("click", function(){
         
        editPassword.type = "text"

    })
    
    editProfile.addEventListener("submit", function(){

        if (localStorage.getItem("loggedUser")) {
            let currentUser  = JSON.parse(localStorage.loggedUser)
           
            
            currentUser.name = editName.value  
            currentUser._username = editUsername.value 
            currentUser._password = editPassword.value 
            currentUser._email = editEmail.value 
            currentUser.image = editPhoto.value 
            currentUser.formacao = editForm.value
            currentUser.uc = editUC.value
            currentUser.cv = editCV.value

            localStorage.loggedUser = JSON.stringify(currentUser)

           for(let i = 0; i < Users.length;i++){


                if(Users[i]._username == currentUser._username ){

                    Users[i] = currentUser
                    localStorage.allUsers = JSON.stringify(Users)
                }

            }

            
            alert("Alterações guardadas")
            
        }
        

    }) 
}