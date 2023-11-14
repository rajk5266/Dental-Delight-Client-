// NAVBAR HANDLING
window.addEventListener("scroll", function () {
  const navbar = this.document.getElementById("NavBar");
  const ulElements = this.document.querySelectorAll(".nav-link-text");
  const navbarDropDownMenu = this.document.querySelector(".dropdown-menu");
  // console.log(navbarDropDownMenu);
  ulElements.forEach((element, index) => {
    // console.log(element)
    // console.log(`Text content of element ${index}: ${element.textContent}`);
    if (this.window.innerWidth > 992) {
      if (this.window.scrollY > 60) {
        navbar.style.backgroundColor = "black";
        navbar.style.transition = "1.5s";
        navbar.style.opacity = "0.9";
        navbar.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'
        element.style.color = "#4D8AFF";
        // navbarDropDownMenu.style.backgroundColor = 'black'
      } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.opacity = "1";
        element.style.color = "white";
        // navbarDropDownMenu.style.backgroundColor = 'black'
      }
    }
    else{
      // if (window.innerWidth < 992) {
        navbar.style.backgroundColor = "black";
      // }

    }
  });

  
});
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
