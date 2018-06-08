window.onload = function() {

    storage()
    account()
    renderUser()
}




function renderUser(){

    let profilePhoto  = document.getElementById("profilePhoto")
    let profileName = document.getElementById("profileName")
    let profileUsername = document.getElementById("profileUsername")
    let profileEmail = document.getElementById("profileEmail")
    let profileMyEvents = document.getElementById("profileMyEvents")

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
        
    }
}