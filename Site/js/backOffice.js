window.onload = function() {
    console.log("Ola")
    hidingTables()
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

function table(){

}