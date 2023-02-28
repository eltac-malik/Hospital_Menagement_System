
let mobMenu = document.querySelector('.hc-nav-list-drop');
let removeBtn = document.querySelector('#hc-remove-mob');
let mobMenuBtn = document.querySelector('.hc-mob-bar')
let doctorBiography=document.querySelector(".doctorBiography")
removeBtn.addEventListener('click', () => {
    mobMenu.style.left = '-350px'
    removeBtn.style.transform = 'rotate(-90deg)'

})
mobMenuBtn.addEventListener('click', () => {
    mobMenu.style.left = '0'
    removeBtn.style.transform = 'rotate(90deg)'
})


var login = document.querySelector('#login');
var register = document.querySelector('#registr');
var logout = document.querySelector('#logout');
var profileBlok = document.querySelectorAll('.profileBlok');
var profile = document.querySelector('#profile');
var profile1 = document.querySelector('#profile1');


if(JSON.parse(localStorage.getItem('currentUser')) != null){
  let current =JSON.parse(localStorage.getItem('currentUser'));
   login.style.display = 'none'
   register.style.display = 'none'
   logout.style.display = 'inline-block'
   profile1.style.display = 'inline-block'
   profile.style.display = 'inline-block'

   profileBlok.forEach(e=>{ e.textContent = `${current.fullName}`
   })

}else{
  login.style.display = 'inline-block'
  register.style.display = 'none'
  logout.style.display = 'none'
  profile.style.display = 'none';
  profile1.style.display = 'none';

}

logout.addEventListener('click', ()=>{
  localStorage.removeItem('currentUser');
  login.style.display = 'inline-block'
  register.style.display = 'inline-block'

})
let ihlist =document.querySelector(".ih-doctorcards")

if(ihlist != null){



const doctorlist = JSON.parse(localStorage.getItem("doctors"))

const popular = doctorlist.filter(e => { if (e.isPopular == true){
    return e
}})

let iconarr = [

]


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
        <a >
          <span onclick="doctorBiograph()" style="cursor: pointer;">Biography</span>
          <i class="fa-solid  fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
    `
    
  });
}

// function doctorBiograph(){

//   window.location.href="./pages/doctor/doctor-view-profile.html"

// }


doctorWriter(popular)


let valueDisplays = document.querySelectorAll(".ih-item-num");
let interval = 1000;
console.log(valueDisplays);
valueDisplays.forEach((valueDisplay)=>{
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function(){
        startValue+= 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue){
          clearInterval(counter)
        }
  }, duration);
})





var $frame  = $('#basic');
var $slidee = $frame.children('ul').eq(0);
var $wrap   = $frame.parent();

// Call Sly on frame
$frame.sly({
  horizontal: 1,
  itemNav: 'basic',
  smart: 1,
  activateOn: 'click',
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: 3,
  scrollBar: $wrap.find('.scrollbar'),
  scrollBy: 1,
  pagesBar: $wrap.find('.pages'),
  activatePageOn: 'click',
  speed: 300,
  elasticBounds: 1,
  easing: 'easeOutExpo',
  dragHandle: 1,
  dynamicHandle: 1,
  clickBar: 1,

  // Buttons
  forward: $wrap.find('.forward'),
  backward: $wrap.find('.backward'),
  prev: $wrap.find('.prev'),
  next: $wrap.find('.next'),
  prevPage: $wrap.find('.prevPage'),
  nextPage: $wrap.find('.nextPage')
});

// To Start button
$wrap.find('.toStart').on('click', function () {
  var item = $(this).data('item');
  // Animate a particular item to the start of the frame.
  // If no item is provided, the whole content will be animated.
  $frame.sly('toStart', item);
});

// To Center button
$wrap.find('.toCenter').on('click', function () {
  var item = $(this).data('item');
  // Animate a particular item to the center of the frame.
  // If no item is provided, the whole content will be animated.
  $frame.sly('toCenter', item);
});

// To End button
$wrap.find('.toEnd').on('click', function () {
  var item = $(this).data('item');
  // Animate a particular item to the end of the frame.
  // If no item is provided, the whole content will be animated.
  $frame.sly('toEnd', item);
});

// Add item
$wrap.find('.add').on('click', function () {
  $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
});

// Remove item
$wrap.find('.remove').on('click', function () {
  $frame.sly('remove', -1);
});



$(".slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, //2000ms = 2s;
  autoplayHoverPause: true,
});
}