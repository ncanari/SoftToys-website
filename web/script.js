let track = document.querySelector('.carousel__track');
let slides = Array.from(track.children);
let nextButton = document.querySelector('.carousel__button--right');
let prevButton = document.querySelector('.carousel__button--left');
let slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

let currentSlide = track.querySelector('.current-slide');

function shiftSlide(dir) {
    let targetSlide;

    if (dir === 1) {
        targetSlide = currentSlide.nextElementSibling;
        if (!targetSlide) {
            targetSlide = slides[0];
        }
    } else {
        targetSlide = currentSlide.previousElementSibling;
        if (!targetSlide) {
            targetSlide = slides[slides.length - 1];
        }
    }

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    currentSlide = targetSlide;
}

$(document).ready(function() {
    $("form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                phoneUS: true
            },
            toy: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Пожалуйста, введите ваш email",
                email: "Пожалуйста, введите корректный адрес электронной почты"
            },
            name: {
                required: "Пожалуйста, введите ваше имя",
                minlength: "Ваше имя должно состоять как минимум из 2 символов"
            },
            phone: {
                required: "Пожалуйста, введите ваш номер телефона",
                phoneUS: "Пожалуйста, введите корректный номер телефона"
            },
            toy: {
                required: "Пожалуйста, выберите игрушку"
            }
        },
        errorPlacement: function(error, element) {
            alert(error.text());
        }
    });
    
    jQuery.validator.addMethod('phoneUS', function(phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, '');
        return this.optional(element) || phone_number.length > 9 &&
            phone_number.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/);
    }, 'Пожалуйста, введите корректный номер телефона');
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}