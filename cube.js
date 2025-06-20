const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');


// GESTION DE LA NAVIGATION AVEC CUBE 3D
navs.forEach((nav, idx) => {
  nav.addEventListener('click', () => {
    // Mise à jour des classes "active" sur la navbar
    document.querySelector('.nav-list li.active')?.classList.remove('active');
    nav.classList.add('active');

    // Rotation du cube (chaque face = 90°)
    cube.style.transform = `rotateY(${idx * -90}deg)`;

    // Mise à jour de la section active
    document.querySelector('.section.active')?.classList.remove('active');
    sections[idx].classList.add('active');

    // Gestion spéciale pour activer l'effet "action-active" sur la 5e section
    const array = Array.from(sections);
    const arrSecs = array.slice(1, -1);
    arrSecs.forEach(arrSec => {
      if (arrSec.classList.contains('active')) {
        sections[4].classList.add('action-active');
      } else {
        sections[4].classList.remove('action-active');
      }
    });
    if(sections[4].classList.contains('active')) {
      sections[4].classList.remove('action-contact');
    }
  });
});



//resume section when clicking tab-list 
resumeLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    document.querySelector('.resume-list.active').classList.remove('active');
    list.classList.add('active');

    document.querySelector('.resume-box.active').classList.remove('active');
    resumeBoxs[idx].classList.add('active');

  });
});




//portfolio section when clicking tab-list

portfolioLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    document.querySelector('.portfolio-list.active').classList.remove('active');
    list.classList.add('active');

    document.querySelector('.portfolio-box.active').classList.remove('active');
    portfolioBoxs[idx].classList.add('active');

  });
});



//visibility for contact section when reloading (cube reloading animation)
setTimeout(() => {
  sections[4].classList.remove('active');
}, 1500);