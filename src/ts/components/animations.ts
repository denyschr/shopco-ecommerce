import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";

Splitting();

gsap.registerPlugin(ScrollTrigger);

// Splitting text (should set data-splitting for an element)
// gsap.utils.toArray(".title").forEach((title): void => {
//   const chars = (title as HTMLElement).querySelectorAll(".char");
//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: title as HTMLElement,
//       },
//     })
//     .from(chars, {
//       opacity: 0,
//       stagger: 0.06,
//       ease: "back.out",
//     });
// });

// Example of animation
// gsap.from(".example", {
//   scrollTrigger: ".example",
//   stagger: 0.3,
//   y: 50,
//   opacity: 0,
// });
