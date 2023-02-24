const efDoprofile = document.getElementById("ef-doc-profile");
const doctorName = document.querySelector(".docname");
let currentDoctor = JSON.parse(localStorage.getItem("currentDoctor"));

function doctorProfileWriter() {
  efDoprofile.innerHTML = `
    <div class="efdocimg">
    <img
      src="${currentDoctor.image}"
      alt="${currentDoctor.name}"
    />
  </div>
  <div class="docinfo">
    <p class="docname" onclick="doctorBacklist()">${currentDoctor.name}</p>
    <p class="docreyting">
      <span class="doc-star">
        <i class="fas fa-star filled"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"> </i><i class="fa-solid fa-star"></i>
      </span>
      <i class="text-light-gray fa-solid fa-star"></i> 35
    </p>
    <p class="docloc">
      <i class="text-light-gray fa-solid fa-location-dot"></i> ${currentDoctor.location}
    </p>
  </div>
    `;
}
doctorProfileWriter();

function doctorBacklist() {
  window.location.href = "../doctor/doctor-view-profile.html";
}
