//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




// video player
var videoPlayer = document.getElementById('videoPlayer');
var myVideo = document.getElementById('myVideo');

function stopVideo(){
    videoPlayer.style.display = "none"
}

function playVideo(file){
    myVideo.src = file;
    videoPlayer.style.display = "block"
}

// scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-content h1, .about-content, .form-box', {origin: 'left'});
ScrollReveal().reveal('.service-container, .events-box, .contact-box, .about-img', {origin: 'bottom'});

//typed js
const typed = new Typed('.multiple-text', {
    strings: ['Entertainer', 'Developer', 'Graphics Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


