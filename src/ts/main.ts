import "../scss/style.scss";
// Menu
import menuInit from "./components/menu";
menuInit();

// Dynamic adaptive
import "./libs/dynamic-adaptive";

// Preloader
// import preloader from './components/preloader';
// preloader();

// Go to top
// import goToTopInit from './components/go-to-top';
// goToTopInit();

// Simplebar
// import './components/simplebar';

// Slider
import "./components/sliders";

// Range
// import './libs/range';

// Tabs
// import GrapthTabs from './components/tabs';
// const tabs = new GrapthTabs();

// Spoilers
import "./libs/spoilers";

// Select
// import './libs/select';

// Popup
// import Popup from './components/popup';
// const popup = new Popup();

// Animations
import "./components/animations";

// Animated counter
import "./components/animated-counter";

// Infinite slider
import infiniteSlider from "./components/infinite-slider";
infiniteSlider();

const dropdowns: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-dropdown]");

if (dropdowns.length) {
  dropdowns.forEach((dropdown): void => {
    dropdown.addEventListener("click", (e): void => {
      dropdown.classList.toggle("_active");
      e.preventDefault();
    });
    window.addEventListener("click", (e): void => {
      if (e.target !== dropdown) {
        dropdown.classList.remove("_active");
      }
    });
  });
}

const headerSearchIcon = document.getElementById(
  "search-icon",
) as HTMLButtonElement;

const headerSearchForm = document.querySelector(
  ".search-header",
) as HTMLFormElement;

const headerSearchClose = headerSearchForm.querySelector(
  ".search-header__button",
) as HTMLButtonElement;

headerSearchIcon.addEventListener("click", (): void => {
  document.body.classList.add("locked");
  headerSearchForm.classList.add("_active");
});

headerSearchClose.addEventListener("click", (): void => {
  document.body.classList.remove("locked");
  headerSearchForm.classList.remove("_active");
});
