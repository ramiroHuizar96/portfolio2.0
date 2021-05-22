const tl = gsap.timeline({default: { ease: "power1.out"}})

tl.to('.text', {y:'0%', duration: 1, stagger: 0.25}) //animated text settings
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5}) //backscreen slider settings
tl.to('.intro', {y: "-100%", duration: 1}, "-=1") //moving the black screen with the text
tl.fromTo("nav", {opacity: 0}, {opacity:1, duration:1} ) //nav and welcome message settings
tl.fromTo(".big-text", {opacity: 0}, {opacity:1, duration:1}, "-=1" ); 

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li')

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

         //animate links
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        }
    });

        burger.classList.toggle('toggle');

    });
}

navSlide();
