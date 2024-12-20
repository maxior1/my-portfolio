/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


/*========== scroll sections active link ==========*/
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
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    };

  });


    /*========== sticky navbar ==========*/
// window.onscroll =()=>{
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
// }



    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*========== swiper ==========*/
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


/*========== dark light mode ==========*/
let darkModeIcon =document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 1500,
  delay: 300

});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img img, .allskills-container, .portfolio-box, .certificate-wrapper, .timeline, .achievement-container, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', {origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', {origin: 'right'});





// ================== popup image =====================
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");
  const images = document.querySelectorAll(".clickable-image");

  images.forEach(img => {
      img.addEventListener("click", () => {
          modal.style.display = "block";
          modalImg.src = img.getAttribute("data-src");
      });
  });

  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
      if (e.target !== modalImg) {
          modal.style.display = "none";
      }
  });
});


 // JavaScript for handling the popup functionality
 document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popup-image');
  const popupDescription = document.getElementById('popup-description');
  const closePopup = document.querySelector('.close-popup');

  // Open popup on clicking a project link
  document.querySelectorAll('.open-popup').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();

          const image = link.getAttribute('data-image');
          const description = link.getAttribute('data-description');

          popupImage.src = image;
          popupDescription.textContent = description;

          popup.style.display = 'flex';
      });
  });

  // Close popup when clicking the close button
  closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
  });

  // Close popup when clicking outside the content
  popup.addEventListener('click', (e) => {
      if (e.target === popup) {
          popup.style.display = 'none';
      }
  });
});z