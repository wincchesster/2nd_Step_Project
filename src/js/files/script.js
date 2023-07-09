// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// слайд картинки в секції features-section__reel (переміщення картинки вліво при прокрутці)
window.addEventListener('scroll', function() {
    let image = document.querySelector('.slide-in-image');
    let imagePosition = image.getBoundingClientRect().top;
  
    let windowHeight = window.innerHeight;
  
    if (imagePosition - windowHeight <= 0) {
      image.classList.add('slide-in');
    }
  });

//   function color() {
//     let img = document.querySelector('.slide-in-image');

//     img.classList.add('slide-in');
//   }

//   color();