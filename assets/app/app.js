
var mobMenu = document.querySelector('.hc-nav-list-drop');
var removeBtn = document.querySelector('#hc-remove-mob');
var mobMenuBtn = document.querySelector('.hc-mob-bar')
removeBtn.addEventListener('click', () => {
    mobMenu.style.left = '-350px'
    removeBtn.style.transform = 'rotate(-90deg)'

})
mobMenuBtn.addEventListener('click', () => {
    mobMenu.style.left = '0'
    removeBtn.style.transform = 'rotate(90deg)'
})

$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
});



const doctorlist = JSON.parse(localStorage.getItem("doctors"))

const popular = doctorlist.filter(e => { if (e.isPopular == true){
    return e
}})

let iconarr = [

]

let ihlist =document.querySelector(".ih-doctorcards")

function doctorWriter(arr){
  arr.forEach(e => {
    ihlist.innerHTML += `<div class="ih-doctor-column-outer col-xl-3 col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
    <div class="ih-doctor-column-inner">
      <div class="ih-doctor-img-content">
        <img
          src="${e.image}"
          alt="">
        <div class="ih-doctors-inner-icon">
        <img src="${e.depimg}">
        </div>
      </div>
      <div class="ih-doctor-text-content">
        <span>${e.spec}</span>
        <h3>${e.name}</h3>
        <p>${e.overview.about}
        </p>
        <a href="">
          <span>Biography</span>
          <i class="fa-solid  fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
    `
    
  });
}

doctorWriter(popular)
