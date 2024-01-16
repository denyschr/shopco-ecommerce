import "../scss/style.scss";
// Focus-visible
import "./libs/focus-visible";

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
// import "./components/simplebar";

// Slider
import "./components/sliders";

// Range
import "./libs/range";

// Quantity
import Quantity from "./components/quantity";
const quantity = new Quantity();

// Tabs
import GrapthTabs from "./components/tabs";
const tabs = new GrapthTabs();

// Spoilers
import "./libs/spoilers";

// Select
import "./libs/select";

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

// Show more
import showMore from "./components/showmore";
showMore();

// Dropdown
import "./components/dropdown";

// Progress circle animation
import "./components/progress-circle";

// Custom scripts
import "./components/script";
