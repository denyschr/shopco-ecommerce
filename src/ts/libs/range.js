import * as noUiSlider from "nouislider";

const rangeItems = document.querySelectorAll("[data-range]");
if (rangeItems.length) {
  rangeItems.forEach((rangeItem) => {
    const rangeSlider = rangeItem.querySelector("[data-range-slider]");
    const range = noUiSlider.create(rangeSlider, {
      connect: true,
      tooltips: {
        to: function (value) {
          return "$" + Math.floor(value);
        },
      },
      behaviour: "snap",
      start: [
        Number(rangeSlider.dataset.rangeFrom),
        Number(rangeSlider.dataset.rangeTo),
      ],
      range: {
        min: [Number(rangeSlider.dataset.rangeFrom)],
        max: [Number(rangeSlider.dataset.rangeTo)],
      },
    });
  });
}
