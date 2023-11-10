// NAVBAR HANDLING 
window.addEventListener('scroll', function(){
    const navbar = this.document.getElementById('NavBar')
    const ulElements = this.document.querySelectorAll('.nav-link-text')
    ulElements.forEach((element, index) => {
        // console.log(element)
        // console.log(`Text content of element ${index}: ${element.textContent}`);
        
        if(this.window.scrollY > 20){
            navbar.style.backgroundColor = 'black';
            navbar.style.transition = '1.5s'
            navbar.style.opacity = '0.6';
            element.style.color = 'white'
        }
        else{
            navbar.style.backgroundColor = 'transparent'
            navbar.style.opacity = '1';
            element.style.color = '#A46403'     
        }
    });    
})
// NAVBAR HANDLING 




// SLIDER SECTION 
let slideIndex = 0;
// showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
// SLIDER SECTION 