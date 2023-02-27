import * as flsFunctions from "./modules/functions.js";
import * as burger from "./modules/burger.js";
import * as responsive from "./modules/responsive.js";
import { scrollTo } from "./modules/scrollTo.js";
import { modal } from "./modules/modal.js";
import { maskPhone } from "./modules/maskPhone.js";
import { sliderHero, sliderHistory, sliderPartners } from "./modules/slider.js";
import { sendForm } from "./modules/sendForm.js";

flsFunctions.isWebp();
burger.isBurger();
responsive.adaptive_function();
scrollTo();
modal();
maskPhone();
sliderHero();
sliderHistory();
sliderPartners();
sendForm();

// Подключение Placeholder
// import * as placeh from "./modules/placeholder.js";
// placeh.placehold();

// Подключение Скрола вверх
// import * as scrollToUp from "./modules/scrollUP.js";
// scrollToUp.scrollUP();

// Подключение Табов
/* import * as tabFunc from "./modules/tab.js";
tabFunc.isTab(); */

//Подключение картинок через html фоном
/* import * as img from "./modules/ibg.js";
img.ibg(); */

// Подключение слайдера
/* import Swiper, {Navigation, Pagination} from 'swiper'; 
const swiper = new Swiper(); */