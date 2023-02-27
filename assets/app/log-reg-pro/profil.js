
// var mobMenu = document.querySelector('.hc-nav-list-drop');
// var removeBtn = document.querySelector('#hc-remove-mob');
// var mobMenuBtn = document.querySelector('.hc-mob-bar')
// removeBtn.addEventListener('click', ()=>{
//     mobMenu.style.left = '-350px'
//     removeBtn.style.transform = 'rotate(-90deg)'

// })
// mobMenuBtn.addEventListener('click', ()=>{
//     mobMenu.style.left = '0'
//     removeBtn.style.transform = 'rotate(90deg)'
// })
let currentView = JSON.parse(localStorage.getItem("currentUser"))
const aacontainer = document.getElementById("aacontainer")
function writerProfile(){
    aacontainer.innerHTML=`
    <div class="row gutters">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="account-settings">
                            <div class="user-profile">
                                <div class="user-avatar">
                                    <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_3000/https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="profil photo">
                                </div>
                                <h5 id="name" class="user-name">${currentView.fullName.toUpperCase()}</h5>
                                <h6 id="email" class="user-email">${currentView.email}</h6>
                            </div>
                            <div class="about">
                                <h5>About</h5>
                                <p>Hello my name is <b>${currentView.fullName.toUpperCase()}</b>, my job FronEnd developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <h6 class="mb-2 text-primary">Personal İnformation</h6>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                                <div class="form-group">
                                    <label for="fullName">Full Name</label>
                                    <input type="text" class="form-control" id="fullName" placeholder=${currentView.fullName}>
                                </div>
                            </div>
                           
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                                <div class="form-group">
                                    <label for="eMail">Email</label>
                                    <input type="email" class="form-control" id="eMail" placeholder=${currentView.email}>
                                </div>
                            </div>
                            <!-- <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"> -->
                                <!-- <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <input type="text" class="form-control" id="phone" placeholder="sd">
                                </div> -->
                            <!-- </div> -->
                            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="text" class="form-control" id="password" placeholder='Change your password'>
                                </div>
                            </div>
                        </div>
                        <div class="row gutters">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="text-right"><br>
                                <form>
                                    <button type="button" id="submit" name="submit"
                                        class="btn btn-secondary">Cancel</button>
                                    <button type="submit" id="submitBtn" name="submit" class="btn btn-primary">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
writerProfile()

let current = JSON.parse(localStorage.getItem("currentUser"))


// let name = document.getElementById("name")
// let eMail1 = document.getElementById("email")



let fullName = document.querySelector("#fullName")
let eMail = document.querySelector("#eMail")
let password = document.querySelector('#password')



// let phone = document.getElementById("phone")
let submitBtn = document.getElementById("submitBtn")

// name.textContent = current.name
// eMail1.textContent = current.email


submitBtn.addEventListener("click",()=>{
    let current = JSON.parse(localStorage.getItem("currentUser"))

    // let current = JSON.parse(localStorage.getItem("current"))

    let checkName = fullName.value !== '' ? {...current,fullName:fullName.value} : current;
    let checkMail = eMail.value !== '' ? { ...checkName, email: eMail.value } : checkName; 
    let newCurrent = password.value !== '' ? { ...checkMail, password: password.value } : checkMail;

    localStorage.setItem("currentUser", JSON.stringify(newCurrent))

    let allUsers = JSON.parse(localStorage.getItem("local-users"));

    let newAllUsers = allUsers.map(e=> {
        if (e.id == newCurrent.id) {
            e = newCurrent
        }
        return e
    })

    localStorage.setItem("local-users", JSON.stringify(newAllUsers))

})




