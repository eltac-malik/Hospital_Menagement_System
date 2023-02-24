const hospitalCard = document.getElementById("AS-main");
const ASbuton = document.getElementsByClassName("AS-button");
const differentCard = document.getElementsByClassName("AShospital-card");
const stars = document.querySelectorAll(".ASstar");

function hospitalWriter(e) {
  doctors.forEach((e) => {
    hospitalCard.innerHTML += `
        <div class="AShospital-card">
        <div class="row">
          <div class="col-12">
            <img src='${
              e.hospitalImage
            }' alt="Hospital Image" class="img-fluid">
          </div>
          <div class="col-12">
            <div class="AScard-body">
              <h4 class="AShospital-name">${e.hosp.slice(0, 15)}...</h4>
              <p class="ASaddress">Address: ${e.location}</p>
              <p class="ASrating">Rating:
              <span class="ASstar" id="star1" style="color:gray">&#9733;</span>
              <span class="ASstar" id="star2" style="color:gray">&#9733;</span>
              <span class="ASstar" id="star3" style="color:gray">&#9733;</span>
              <span class="ASstar" id="star4" style="color:gray">&#9733;</span>
              <span class="ASstar" id="star5" style="color:gray">&#9733;</span>
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

if (JSON.parse(localStorage.getItem("doctors")) === null) {
  localStorage.setItem("doctors", JSON.stringify(doctors));
}

function selectStar(selectedIndex) {
  for (let i = 0; i < stars.length; i++) {
    if (i < selectedIndex) {
      stars[i].style.color = "gold"; // seçilen yıldızların ve önceki yıldızların rengini değiştir
    } else {
      stars[i].style.color = "gray"; // seçilen yıldızların ve sonraki yıldızların rengini değiştir
    }
  }
}

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", function () {
    selectStar(i);
  });
}

selectStar();

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
