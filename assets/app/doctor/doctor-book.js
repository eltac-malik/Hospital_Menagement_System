const efDoprofile= document.getElementById('ef-doc-profile')
const doctorName=document.querySelector(".docname")


function doctorProfileWriter() {
    efDoprofile.innerHTML=`
    <div class="efdocimg">
    <img
      src="https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-02.jpg"
      alt=""
    />
  </div>
  <div class="docinfo">
    <p class="docname" onclick="doctorBacklist()">Dr. Darren Elder</p>
    <p class="docreyting">
      <span class="doc-star">
        <i class="fas fa-star filled"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"> </i><i class="fa-solid fa-star"></i>
      </span>
      <i class="text-light-gray fa-solid fa-star"></i> 35
    </p>
    <p class="docloc">
      <i class="text-light-gray fa-solid fa-location-dot"></i> Newyork, USA
    </p>
  </div>
    `

}
doctorProfileWriter()


function doctorBacklist(){
    window.location.href="../doctor/doctor-list.html"

}