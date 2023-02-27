let mobMenu = document.querySelector('.hc-nav-list-drop');
let removeBtn = document.querySelector('#hc-remove-mob');
let mobMenuBtn = document.querySelector('.hc-mob-bar');
let NZcards = document.querySelector(".portfolio-gallery");
removeBtn.addEventListener('click', () => {
	mobMenu.style.left = '-350px'
	removeBtn.style.transform = 'rotate(-90deg)'

})
mobMenuBtn.addEventListener('click', () => {
	mobMenu.style.left = '0'
	removeBtn.style.transform = 'rotate(90deg)'
})
if (localStorage.getItem("currentDoctor") !== null) {
	localStorage.removeItem("currentDoctor");
  }
fromHospitaldoctorWriter();

	 (function ($) {
		'use strict';
		if ($(window).width() < 992) {
			$('.navigation .dropdown-toggle').on('click', function () {
				$(this).siblings('.dropdown-menu').animate({
					height: 'toggle'
				}, 300);
			});
		}

		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 70) {
				$('.backtop').addClass('reveal');
			} else {
				$('.backtop').removeClass('reveal');
			}
		});

		$('.scroll-top-to').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});

		$('.portfolio-single-slider').slick({
			infinite: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000
		});
		$('.clients-logo').slick({
			infinite: true,
			arrows: false,
			autoplay: true,
			slidesToShow: 6,
			slidesToScroll: 6,
			autoplaySpeed: 6000,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}

			]
		});

		$('.testimonial-wrap').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			vertical: true,
			verticalSwiping: true,
			autoplaySpeed: 6000,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

			]
		});

		$('.testimonial-wrap-2').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 6000,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

			]
		});



		function counter() {
			var oTop;
			if ($('.counter').length !== 0) {
				oTop = $('.counter').offset().top - window.innerHeight;
			}
			if ($(window).scrollTop() > oTop) {
				$('.counter').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 500,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
				});
			}
		}
		$(window).on('scroll', function () {
			counter();
		});



		if ($('.shuffle-wrapper').length !== 0) {
			var Shuffle = window.Shuffle;
			var jQuery = window.jQuery;

			var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
				itemSelector: '.shuffle-item',
				buffer: 1
			});
			jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
				var input = evt.currentTarget;
				if (input.checked) {
					myShuffle.filter(input.value);
				}
			});
		}

	})(jQuery);




function fromHospitaldoctorWriter() {
	let NZarr = JSON.parse(localStorage.getItem("doctors"));
	NZarr.forEach((e) => {
	   NZcards.innerHTML += `
	   	<div
	   	class="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item"
	   	data-groups='["cat1","cat2"]'
	     >
	   	<div class="position-relative doctor-inner-box">
	   	  <div class="doctor-profile">
	   		<div class="doctor-img">
	   		  <img
	   			src="${e.image}"
	   			alt="doctor-image"
	   			class="img-fluid w-100"
	   		  />
	   		</div>
	   	  </div>
	   	  <div class="content mt-3">
	   		<h4 class="mb-0">
	   		  <a  id="zn-name" href="#" onclick='createDoctorProfile(${e.doctorId}); getDoctorProfile()'>${e.name}</a>
	   		</h4>
	   		<p>${e.dep}</p>
	   	  </div>
	   	</div>
	   </div>
		 
		   
		   `;
		   
	 });
	 
   }

   function createDoctorProfile(id) {
	let allDoctors = JSON.parse(localStorage.getItem("doctors"));
	let currentDoctor = allDoctors.find((item) => item.doctorId === id);
	localStorage.setItem("currentDoctor", JSON.stringify(currentDoctor));
  }
  
  function getDoctorProfile() {
	window.location.href = "/pages/doctor/doctor-view-profile.html";
  }




//   app js 





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