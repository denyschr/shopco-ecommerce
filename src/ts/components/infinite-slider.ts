export default function infiniteSlider(): void {
  const slidersWrapper: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".infinite-slider .infinite-slider-wrapper",
  );
  slidersWrapper.forEach((sliderWrapper): void => {
    const slidersContent = Array.from(sliderWrapper.children);
    slidersContent.forEach((sliderSlide): void => {
      const duplicatedSlide = sliderSlide.cloneNode(true) as HTMLElement;
      duplicatedSlide.setAttribute("aria-hidden", String(true));
      sliderWrapper.appendChild(duplicatedSlide);
    });
  });
}
