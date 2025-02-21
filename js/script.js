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
  const popup = document.getElementById('popup-single');
  const popupImage = document.getElementById('popup-image');
  const popupDescription = document.getElementById('popup-description');
  const closePopup = document.querySelector('.close-popup-single');

  // Open popup on clicking a project link
  document.querySelectorAll('.open-popup-single').forEach(link => {
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
});

// ==================================== Pop-up with many container ============================
    document.addEventListener("DOMContentLoaded", function () {
        const openPopupLinks = document.querySelectorAll(".open-popup");
        const popup = document.getElementById("popup");
        const closePopup = document.querySelector(".close-popup");
        const popupProjectsContainer = document.getElementById("popup-projects-container");

        // Project Data (Mapped by Portfolio ID)
        const projectsData = {
            "looker-project": [  // This ID should match a dataset in HTML
                {
                    "image": "img/portfolio/project/logis.png",
                    "title": "Logistic Project",
                    "description": "Desinged a dashboard to present about logistic for a company",
                    "link": "https://lookerstudio.google.com/s/j13j47bBGUo"
                },
                {
                    "image": "img/portfolio/project/electronic.png",
                    "title": "Electronic Sale Report",
                    "description": "The last project of Business Analystic subject by develop the dashboard and pitching this idea for professor",
                    "link": "https://lookerstudio.google.com/s/hMtqss51YgY"
                },
                {
                    "image": "img/portfolio/project/living.png",
                    "title": "Bangkok Population",
                    "description": "Developed an population dashboard in a workshop in short course",
                    "link": "https://lookerstudio.google.com/s/mD_WEaPi94A"
                },
                {
                    "image": "img/portfolio/project/accident.png",
                    "title": "Accident Statistic in Thailand",
                    "description": "Examimation workshop for finish the course by create a accident dashboard",
                    "link": "https://lookerstudio.google.com/s/u2BxTXCKlqk"
                },
                {
                    "image": "img/portfolio/project/shoping.png",
                    "title": "Shoping Trend Project",
                    "description": "Customer behavior with shoping trend",
                    "link": "https://lookerstudio.google.com/s/gvOLLaVZIb0"
                },
                {
                    "image": "img/portfolio/project/profitt.png",
                    "title": "Practice Project",
                    "description": "Developed an profit dashboard for analyze the profit of a company",
                    "link": "https://lookerstudio.google.com/s/tG0fIngiTxk"
                },
                {
                    "image": "img/portfolio/project/salee.png",
                    "title": "Sale Report Dashboard",
                    "description": "Created an interactive dashboard for business sale reports",
                    "link": "https://lookerstudio.google.com/s/sNV5mMS-y7Q"
                }
            ],
            "powerbi-project": [ 
                {
                    "image": "img/portfolio/bi/hospital.png",
                    "title": "Hospital Emergency Room",
                    "description": "Analyzed the dashboard by using Decriptive Analystic method",
                    "link": "#"
                },
                {
                    "image": "img/portfolio/bi/zomato.png",
                    "title": "Zomato delivery",
                    "description": "Practice dashboard for YouTube with function and language coding",
                    "link": "#"
                },
                {
                    "image": "img/portfolio/bi/sale.png",
                    "title": "Sale Report workshop",
                    "description": "Create dashboard to complete the academy course ",
                    "link": "#"
                },
                {
                    "image": "img/portfolio/bi/condo.png",
                    "title": "Condo Sale project",
                    "description": "Analyzed the insight of data by create dashboard",
                    "link": "#"
                }
                
            ]
        };

        openPopupLinks.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();

                // Get project ID from the clicked element
                const projectId = this.getAttribute("data-project-id"); 

                // Clear previous content
                popupProjectsContainer.innerHTML = "";

                // Get the correct project set based on ID
                const projects = projectsData[projectId] || []; // Default to empty array if ID not found

                // Generate project boxes dynamically
                projects.forEach(project => {
                    let projectBox = document.createElement("div");
                    projectBox.classList.add("popup-project-box");

                    let projectImage = document.createElement("img");
                    projectImage.src = project.image;
                    projectImage.alt = project.title;

                    let projectTitle = document.createElement("h4");
                    projectTitle.textContent = project.title;

                    let projectDescription = document.createElement("p");
                    projectDescription.textContent = project.description;

                    let projectLink = document.createElement("a");
                    projectLink.href = project.link;
                    projectLink.textContent = "View Project";
                    projectLink.target = "_blank"; 
                    projectLink.rel = "noopener noreferrer"; 

                    // Append elements to the project box
                    projectBox.appendChild(projectImage);
                    projectBox.appendChild(projectTitle);
                    projectBox.appendChild(projectDescription);
                    projectBox.appendChild(projectLink);

                    // Append to popup container
                    popupProjectsContainer.appendChild(projectBox);
                });

                // Show popup
                popup.style.display = "flex";
            });
        });

        // Close popup
        closePopup.addEventListener("click", function () {
            popup.style.display = "none";
        });

        // Close popup when clicking outside
        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    });





//============ Send Email
emailjs.init("AgrXJOfGBbZY-BR9Y");
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  emailjs.sendForm('service_jppi50r', 'template_vqt4fsl', this)
      .then(function () {
          alert("Message sent successfully!");
          document.getElementById('contact-form').reset(); 
      }, function (error) {
          alert("Failed to send message: " + error.text);
      });
});

// Function to show the popup with the correct message and icon
// function showPopup(isSuccess, message) {
//   const popup = document.getElementById('pop-message');
//   const popupMessage = document.getElementById('pop-message-text');
//   const popupIcon = document.getElementById('pop-icon');
//   const popupBtn = document.getElementById('pop-btn');

//   // Set the appropriate message and icon based on success or failure
//   if (isSuccess) {
//       popupMessage.textContent = "Message sent successfully!";
//       popupIcon.src = 'https://img.icons8.com/ios/50/000000/checkmark.png'; // Success icon (tick)
//   } else {
//       popupMessage.textContent = "Failed to send message!";
//       popupIcon.src = 'https://img.icons8.com/ios/50/000000/error.png'; // Error icon (cross)
//   }

//   // Show the popup
//   popup.style.display = 'block';

//   // Hide the popup when the "OK" button is clicked
//   popupBtn.addEventListener('click', function() {
//       popup.style.display = 'none';
//   });
// }

// // Adding event listener to form submission
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//   event.preventDefault(); 

//   emailjs.sendForm('service_jppi50r', 'template_vqt4fsl', this)
//       .then(function(response) {
//           showPopup(true); 
//           document.getElementById('contact-form').reset(); 
//       }, function(error) {
//           showPopup(false); 
//       });
// });
