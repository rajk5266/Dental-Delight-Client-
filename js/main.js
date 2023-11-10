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