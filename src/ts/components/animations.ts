import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";

Splitting();

gsap.registerPlugin(ScrollTrigger);

// Splitting text (should set data-splitting for an element)
gsap.utils.toArray("[data-anim-title]").forEach((title): void => {
  const chars = (title as HTMLHeadingElement).querySelectorAll(".char");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: title as HTMLHeadingElement,
        start: "top 70%",
      },
    })
    .from(chars, {
      opacity: 0,
      stagger: 0.06,
      ease: "back.out",
    });
});

// Example of animation
// gsap.from(".dress-style__item", {
//   scrollTrigger: ".products__slider--arrival",
//   stagger: 0.2,
//   opacity: 0,
// });
