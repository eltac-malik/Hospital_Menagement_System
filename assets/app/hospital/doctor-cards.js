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

