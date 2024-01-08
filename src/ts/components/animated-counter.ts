function animateCounter(
  counter: HTMLElement,
  endValue: number,
  symbol: string,
) {
  const duration: number = 3500;
  const frameDuration: number = 1000 / 60;
  const totalFrames: number = Math.round(duration / frameDuration);
  let frame: number = 0;

  function animate() {
    const progress: number = frame / totalFrames;
    const currentValue: number = Math.round(progress * endValue);
    counter.textContent = currentValue + symbol;
    frame++;

    if (frame <= totalFrames) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

const counters: NodeListOf<HTMLElement> = document.querySelectorAll(
  "[data-animate-counter]",
);

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target as HTMLElement;
      const endValue: number = parseInt(
        counter.getAttribute("data-animate-counter")!,
      );
      const symbol: string = counter.textContent!.replace(/[0-9]/g, "");

      animateCounter(counter, endValue, symbol);
      observer.unobserve(counter);
    }
  });
});

counters.forEach((counter) => {
  observer.observe(counter);
});
