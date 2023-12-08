// NAVBAR HANDLING
const navbar = this.document.getElementById("NavBar");
  const ulElements = this.document.querySelectorAll(".nav-link-text");
  const navbarDropDownMenu = this.document.querySelector(".dropdown-menu");
window.addEventListener("scroll", function () {
  
  // console.log(navbarFixed)
  // console.log(navbarDropDownMenu);
  ulElements.forEach((element, index) => {
    // console.log(element)
    // console.log(`Text content of element ${index}: ${element.textContent}`);
    if (this.window.innerWidth > 992) {
      if (this.window.scrollY > 60) {
        navbar.classList.remove('navbar-unscrolled')
        navbar.classList.add("navbar-scrolled")
        navbar.style.display = 'none';
        navbar.style.transition = "1.2s";
        navbar.style.opacity = "1";
        navbar.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'
        element.style.color = "";
        // navbarDropDownMenu.style.backgroundColor = 'black'
      } else {
        navbar.style.display = 'flex';
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('navbar-unscrolled')
        navbar.style.opacity = "1";
        element.style.color = "white";
      }
    }
    else {
      // navbar.classList.remove('navbar-unscrolled')
      // navbar.style.position = 'relative'
     
      // if (window.innerWidth < 992) {
        // navbar.classList.remove('navbar-unscrolled');
        // navbar.classList.add('navbar-scrolled')

        // navbar.style.backgroundColor = "black";
      // }
    }
  }); 
});


window.addEventListener('DOMContentLoaded', function() {
  console.log('dom loaded')
  if(this.window.innerWidth < 700){
    navbar.classList.remove('navbar-unscrolled')
    navbar.style.backgroundColor = '#3867c1';

  }
})
// NAVBAR HANDLING

// SLIDER SECTION
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
// SLIDER SECTION

// CLIENTS REVIEWS
$(document).ready(function () {
  $(".items").slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// CLIENTS REVIEWS



// CERTIFICATE 
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("view-cert");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  // modalImg.src = this.src;
  modalImg.style.width = '100%';
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}