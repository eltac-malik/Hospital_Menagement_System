const hospitalCard = document.getElementById("AS-main");
const ASbuton = document.getElementsByClassName("AS-button");
const differentCard = document.getElementsByClassName("AShospital-card");
const stars = document.querySelectorAll(".ASstar");



function hospitalWriter(e) {
 let ASarr = JSON.parse(localStorage.getItem("doctors"));
  ASarr.forEach((e) => {
    hospitalCard.innerHTML += `
        <div class="AShospital-card">
        <div class="row">
          <div class="col-12">
            <img src='${e.hospitalImage}' alt="Hospital Image" class="img-fluid">
          </div>
          <div class="col-12">
            <div class="AScard-body">
              <h4 class="AShospital-name">${e.hosp.slice(0, 15)}...</h4>
              <p class="ASaddress">Address: ${e.location}</p>
              <p class="ASrating">Rating:
              <span class="ASstar" id="star1">&#9733;</span>
              <span class="ASstar" id="star2">&#9733;</span>
              <span class="ASstar" id="star3">&#9733;</span>
              <span class="ASstar" id="star4">&#9733;</span>
              <span class="ASstar" id="star5">&#9733;</span>
              </p>
              <button class="ASbutton" type="submit" onclick="fun()">Go to the Hospital</button>
            </div>
          </div>
        </div>
      </div>
      
        
        `;
  });
}

hospitalWriter();

function fun() {
  // window.location.href="doctor-cards.html"
  setTimeout(() => (window.location.href = "doctor-cards.html"), 500);
}

// for Doctor view profile

// localStorage.setItem("doctors", JSON.stringify(doctors));

// function createDoctorProfile(id) {
//   let allDoctors = JSON.parse(localStorage.getItem("doctors"));

//   let currentDoctor = allDoctors.find((item) => item.doctorId === id);
//   localStorage.setItem("currentDoctor", JSON.stringify(currentDoctor));
// }

// function getDoctorProfile() {
//   window.location.href = "../doctor/doctor-view-profile.html";
// }

// function getBooking() {
//   window.location.href = "../doctor/docor-book.html";
// }
