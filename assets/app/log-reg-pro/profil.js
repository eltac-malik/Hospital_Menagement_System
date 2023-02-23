let current = JSON.parse(localStorage.getItem("current"))


let name = document.getElementById("name")
let eMail1 = document.getElementById("email")

let fullName = document.getElementById("fullName")
let eMail = document.getElementById("eMail")
let phone = document.getElementById("phone")
let submitBtn = document.getElementById("submitBtn")

name.textContent = current.name
eMail1.textContent = current.email


submitBtn.addEventListener("click",()=>{
    let current = JSON.parse(localStorage.getItem("current"))

    let checkName = fullName.value !== '' ? {...current,name:fullName.value} : current;
    let checkMail = eMail.value !== '' ? { ...checkName, email: eMail.value } : checkName; 
    let newCurrent = phone.value !== '' ? { ...checkMail, phone: phone.value } : checkMail;

    localStorage.setItem("current", JSON.stringify(newCurrent))

    let allUsers = JSON.parse(localStorage.getItem("users"));

    let newAllUsers = allUsers.map(e=> {
        if (e.id == newCurrent.id) {
            e = newCurrent
        }
        return e
    })

    localStorage.setItem("users", JSON.stringify(newAllUsers))

})
