const circle = document.querySelector(".circle-progress__item") as HTMLElement;
const percent = document.querySelector(
  ".circle-progress__percent",
) as HTMLElement;

function progressCircle(): void {
  const scrollTop: number = window.scrollY;
  const windowHeight: number = window.innerHeight;
  const siteHeight: number = document.documentElement.scrollHeight;

  const percentageProgress: number = Math.floor(
    (scrollTop / (siteHeight - windowHeight)) * 100,
  );

  percent.innerHTML = `${percentageProgress}%`;

  if (parseInt(percent.textContent!) == 100) {
    percent.style.color = "green";
    circle.style.stroke = "green";
  } else {
    percent.style.color = "#f33";
    circle.style.stroke = "#f33";
  }

  const radius: number = Number(circle?.getAttribute("r"));

  const circleLength: number = 2 * Math.PI * radius;

  circle?.setAttribute("stroke-dasharray", String(circleLength));
  circle?.setAttribute(
    "stroke-dashoffset",
    String(-circleLength - (circleLength * percentageProgress) / 100),
  );
}

progressCircle();

window.addEventListener("scroll", progressCircle);
