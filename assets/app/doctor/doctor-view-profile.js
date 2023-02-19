let zb_booking = document.querySelector(".zb-d-booking-btn");

let zb_call = document.querySelectorAll(".zb-c-box-call");

let zb_header_link = document.querySelector(".zb-r-2-header-link");

function showDoctorDetails(targetId) {
  let zb_details = document.querySelectorAll(".zb-d-fn");
  for (let i = 0; i < zb_details.length; i++) {
    if (zb_details[i].id === targetId) {
      zb_details[i].style.display = "flex";
    } else {
      zb_details[i].style.display = "none";
    }
  }
}

function getBooking() {
  window.location.href = "../doctor/docor-book.html";
}

zb_call[0].addEventListener("click", () => {
  document.body.innerHTML += `

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
  <div class="zb-modal-card">
  <div class="zb-modal-img">
  <img
                class="zb-d-image"
                src="https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-02.jpg"
                alt="Dr. Darren Elder"
                />
  </div>
  <span> Dr. Darren Elder</span>
  <p class="zb-connecting"> Connecting...</p>
  <div class="d-center">
  <div class="zb-modal-hangup-icon zb-m-call-icon-font d-center">
  <i class="fa-solid fa-phone"></i>
  </div>
  <div class="zb-modal-call-icon zb-m-call-icon-font d-center">
  <i class="fa-solid fa-phone"></i>
  </div>
  </div>
  
</div>
  </div>
</div>
    `;
});
