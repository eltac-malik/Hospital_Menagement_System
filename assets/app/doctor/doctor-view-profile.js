let zb_booking = document.querySelector(".zb-d-booking-btn");

let zb_call = document.querySelectorAll(".zb-c-box-call");

let zb_header_link = document.querySelector(".zb-r-2-header-link");

let zb_doctor_container_row_1 = document.querySelector(
  ".zb-doctor-container-row-1"
);
let zb_overview = document.querySelector(".zb-overview");

let currentDoctor = JSON.parse(localStorage.getItem("currentDoctor"));

let clinicGalary = [
  "https://doccure.dreamguystech.com/html/template/assets/img/features/feature-03.jpg",
  "https://doccure.dreamguystech.com/html/template/assets/img/features/feature-02.jpg",
  "https://doccure.dreamguystech.com/html/template/assets/img/features/feature-01.jpg",
  "https://doccure.dreamguystech.com/html/template/assets/img/features/feature-04.jpg",
];

function doctorProfileWriter() {
  zb_doctor_container_row_1.innerHTML = `
  <div class="zb-d-col-1">
          <div class="zb-d-image-box">
            <img
              class="zb-d-image"
              src="${currentDoctor.image}"
              alt="${currentDoctor.name}"
            />
          </div>
          <div class="zb-d-info-box">
            <h1 id="zb-d-name">${currentDoctor.name}</h1>
            <p id="zb-d-hospital">${currentDoctor.spec}</p>
            <p class="zb-d-padding-t-b-5" id="zb-d-field">
              <img
                src="${currentDoctor.depimg}"
                class="zb-img-fluid"
                alt="Speciality"
              />${currentDoctor.dep}
            </p>
            <p class="zb-d-padding-t-b-5 zb-ratings"></p>
            <p class="zb-d-address zb-d-padding-t-b-5">
              <i class="zb-icon-bg-gray fa-solid fa-location-dot"></i>
              <span>${currentDoctor.location}</span>
            </p>

            <!-- clinic galary -->
            <ul class="zb-clinic-gallery"></ul>
            <div class="zb-clinic-services">
              <span>${currentDoctor.procedure}</span>
              <span>${currentDoctor.procedure2}</span>
            </div>
          </div>
        </div>
        <div class="zb-d-contact-box">
          <!-- like -->
          <div class="zb-d-contact-row d-start-y">
            <div class="zb-d-contact-col-1 d-center">
              <i class="fa-solid fa-thumbs-up"></i>
            </div>
            <div class="d-center">
              <p class="zb-d-like">${currentDoctor.pers}</p>
            </div>
          </div>
          <!-- Feedback -->
          <div class="zb-d-contact-row d-start-y">
            <div class="zb-d-contact-col-1 d-center">
              <i class="fa-regular fa-comment"></i>
            </div>
            <div class="d-center">
              <p class="zb-d-feedback">${currentDoctor.feed}</p>
            </div>
          </div>
          <!-- Address -->
          <div class="zb-d-contact-row d-start-y">
            <div class="zb-d-contact-col-1 d-center">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="d-center">
              <p class="zb-d-address">${currentDoctor.location}</p>
            </div>
          </div>
          <!-- Price -->
          <div class="zb-d-contact-row d-start-y">
            <div class="zb-d-contact-col-1 d-center">
              <i class="fa-solid fa-money-check-dollar"></i>
            </div>
            <div class="d-center">
              <p class="zb-d-price">$${currentDoctor.price} per hour</p>
            </div>
          </div>

          <div class="zb-c-info">
            <div class="zb-c-box d-center zb-c-hover-red">
              <i class="fa-regular fa-bookmark"></i>
            </div>
            <div class="zb-c-box d-center zb-c-hover-green">
              <i class="fa-regular fa-message"></i>
            </div>
            <div
              class="zb-c-box zb-c-box-call d-center zb-c-hover-green"
              data-toggle="modal"
              data-target="#exampleModalCenter" onclick='callDoctor()'
            >
              <i class="fa-solid fa-phone-flip"></i>
            </div>
            <div
              class="zb-c-box zb-c-box-call d-center zb-c-hover-green"
              data-toggle="modal"
              data-target="#exampleModalCenter" onclick='callDoctor()'
            >
              <i class="fa-sharp fa-solid fa-video"></i>
            </div>
          </div>

          <div class="zb-d-booking d-center">
            <a class="zb-d-booking-btn d-center" onclick="getBooking()">
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
  `;
}
doctorProfileWriter();

function doctorOverviewWriter() {
  let zb_overview_about = document.querySelector(".zb-overview-about");
  zb_overview_about.textContent = currentDoctor.overview.about;
}
doctorOverviewWriter();

function doctorEducationWriter() {
  let education = currentDoctor.education;
  let zb_education = document.querySelector(".zb-education");
  education.forEach((e) => {
    zb_education.innerHTML += `
<li>
                  <a
                    class="zb-font zb-text-decoration-none zb-links"
                    target="_blank"
                    href="/"
                    >${e.university}</a
                  >
                  <p>${e.field}</p>
                  <p>${e.year}</p>
                </li>
`;
  });
}
doctorEducationWriter();

function doctorExperienceWriter() {
  let experience = currentDoctor.experience;
  let zb_experience = document.querySelector(".zb-experience");
  experience.forEach((e) => {
    zb_experience.innerHTML += `
    <li>
    <a
      class="zb-font zb-text-decoration-none zb-links"
      target="_blank"
      href="/"
      >${e.hospital}</a
    >
    <p>${e.year}</p>
  </li>
  `;
  });
}
doctorExperienceWriter();

function doctorAwardWriter() {
  let awards = currentDoctor.award;
  let zb_awards = document.querySelector(".zb-awards");
  awards.forEach((e) => {
    zb_awards.innerHTML += `
    <li>
      <p style="color: blue">${e.year}</p>
      <h6>${e.awardName}</h6>
      <p>${e.awardAbout}</p>
    </li>
  `;
  });
}
doctorAwardWriter();

function doctorServiceWriter() {
  let serviceArr = currentDoctor.service;
  let zb_service = document.querySelector(".zb-service-w");
  serviceArr.forEach((e) => {
    zb_service.innerHTML += `
  <div class="zb-d-contact-row zb-service-boxes">
                <div class="zb-d-contact-col-1 d-center">
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div class="d-center">
                  <p class="zb-d-price">${e}</p>
                </div>
              </div>
  `;
  });
}
doctorServiceWriter();

function doctorSpecializationWriter() {
  let specializationArr = currentDoctor.specialization;
  let zb_specialization = document.querySelector(".zb-specialization-w");
  specializationArr.forEach((e) => {
    zb_specialization.innerHTML += `
    <div class="zb-d-contact-row zb-service-boxes">
    <div class="zb-d-contact-col-1 d-center">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
    <div class="d-center">
      <p class="zb-d-price">${e}</p>
    </div>
  </div>
  `;
  });
}
doctorSpecializationWriter();

function showDoctorDetails(targetId, headerId) {
  let zb_details = document.querySelectorAll(".zb-d-fn");

  zb_details.forEach((e) => {
    if (e.id === targetId) {
      e.style.display = "flex";
    } else {
      e.style.display = "none";
    }
  });

  let zb_r_2_header = document.querySelectorAll(".zb-r-2-header");
  zb_r_2_header.forEach((e) => {
    e.style.color = "var(--text-primary-color)";
    e.style.borderBottom = "1px solid silver";
  });

  let activeHeader = document.getElementById(headerId);
  activeHeader.style.color = "var(--button-secondary-color)";
  activeHeader.style.borderBottom = "3px solid var(--button-secondary-color)";
}

function getBooking() {
  window.location.href = "/pages/doctor/docor-book.html";
}

function callDoctor() {
  document.body.innerHTML += `

  <!-- Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="zb-modal-card">
    <div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="zb-modal-img">
    <img
                  class="zb-d-image"
                  src="https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-02.jpg"
                  alt="Dr. Darren Elder"
                  />

   
    </div>
  </div>
    <span> Dr. Darren Elder</span>
    <p class="zb-connecting"> Connecting...</p>
    <div class="d-center">
    <div class="zb-modal-hangup-icon zb-m-call-icon-font d-center">
    <i class="fa-solid fa-phone-slash"></i>
    </div>
    <div class="zb-modal-call-icon zb-m-call-icon-font d-center">
    <i class="fa-solid fa-phone"></i>
    </div>
    </div>
    
  </div>
    </div>
  </div>
      `;
  playAudio("/assets/audio/58584423423234.mp3");
}

function writeClinicGalary() {
  let zb_clinic_gallery = document.querySelectorAll(".zb-clinic-gallery");
  let count = 0;
  zb_clinic_gallery.forEach((galary) => {
    clinicGalary.forEach((e) => {
      count++;
      galary.innerHTML += `
      <li>
        <a data-toggle="modal" data-target="#showGalary0${count}"
          onclick="showClinicGalary(${count}, '${e}')"
          href=${e} data-fancybox="gallery">
          <img src=${e} alt="Feature"/>
        </a>
      </li>
      `;
    });
  });
}

writeClinicGalary();
function showClinicGalary(dataId, img) {
  let str = "showGalary0" + dataId;
  document.body.innerHTML += `
    <!-- Modal -->
    <div class="modal fade" id="${str}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="zb-modal-card zb-modal-clinic-galary"> 
      <img src=${img} alt="Feature"/>
    </div>
      </div>
    </div>
    `;
}

// stop audio func

function playAudio(file) {
  var audio = new Audio(file);
  audio.play();
  setTimeout(function () {
    stopAudio(audio);
  }, 5000);
  return audio;
}

function writeWeekDays() {
  let tbody = document.querySelector(".zb-business-days");
  let weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  weekdays.forEach((e) => {
    tbody.innerHTML += `
  <tr>
    <td>${e}</td>
    <td>07:00 AM - 09:00 PM</td>
  </tr>
  `;
  });
  tbody.innerHTML += `
  <tr>
    <td>Sunday</td>
    <td>
      <span class="zb-b-h-close zb-b-h-font">Closed</span>
    </td>
  </tr>
  `;
}
writeWeekDays();

function showTodayDate() {
  let today_b_table = document.querySelector(".today-date");
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    year: "numeric",
    day: "numeric",
    month: "short",
  });
  today_b_table.innerHTML = `${dateString}`;
}
showTodayDate();

function ratings() {
  let zb_ratings = document.querySelectorAll(".zb-ratings");
  zb_ratings.forEach((rate) => {
    rate.innerHTML = `
      <i class="zb-star-icon-bg-yellow fa-solid fa-star"></i>
      <i class="zb-star-icon-bg-yellow fa-solid fa-star"></i>
      <i class="zb-star-icon-bg-yellow fa-solid fa-star"></i>
      <i class="zb-star-icon-bg-yellow fa-solid fa-star"></i>
      <i class="zb-icon-bg-gray fa-solid fa-star"></i>
      <span>(35)</span>
    `;
  });
}
ratings();
