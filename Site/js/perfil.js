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


    if (localStorage.getItem("loggedUser")) {
        let currentUser  = JSON.parse(localStorage.loggedUser)

        editName.value = currentUser.name
        editUsername.value = currentUser._username
        editPassword.value = currentUser._password
        editEmail.value = currentUser._email
        editPhoto.value = currentUser.image
        
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