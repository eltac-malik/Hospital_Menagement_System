
var mobMenu = document.querySelector('.hc-nav-list-drop');
var removeBtn = document.querySelector('#hc-remove-mob');
var mobMenuBtn = document.querySelector('.hc-mob-bar')
removeBtn.addEventListener('click', ()=>{
    mobMenu.style.left = '-350px'
    removeBtn.style.transform = 'rotate(-90deg)'

})
mobMenuBtn.addEventListener('click', ()=>{
    mobMenu.style.left = '0'
    removeBtn.style.transform = 'rotate(90deg)'
})






let current = JSON.parse(localStorage.getItem("local-users"))


let name = document.getElementById("name")

let eMail1 = document.getElementById("email")

let fullName = document.getElementById("fullName")
let eMail = document.getElementById("eMail")
// let phone = document.getElementById("phone")
let submitBtn = document.getElementById("submitBtn")

name.textContent = current.name
eMail1.textContent = current.email


submitBtn.addEventListener("click",()=>{
    let current = JSON.parse(localStorage.getItem("local-users"))
console.log(name.value)


    let checkName = fullName.value !== '' ? {...current,name:fullName.value} : current;
    let checkMail = eMail.value !== '' ? { ...checkName, email: eMail.value } : checkName; 
    let newCurrent = phone.value !== '' ? { ...checkMail, phone: phone.value } : checkMail;

    localStorage.setItem("local-users", JSON.stringify(newCurrent))

    let allUsers = JSON.parse(localStorage.getItem("users"));

    let newAllUsers = allUsers.map(e=> {
        if (e.id == newCurrent.id) {
            e = newCurrent
        }
        return e
    })

    localStorage.setItem("users", JSON.stringify(newAllUsers))

})


