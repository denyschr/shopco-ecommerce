import Swiper from "swiper";
import { Pagination, Navigation, Autoplay, Thumbs } from "swiper/modules";

if (document.querySelector(".testimonials__slider")) {
  const slider: Swiper = new Swiper(".testimonials__slider", {
    modules: [Navigation, Autoplay],
    loop: true,
    freeMode: true,
    spaceBetween: 15,
    speed: 800,
    navigation: {
      nextEl: ".nav-testimonials__button--next",
      prevEl: ".nav-testimonials__button--prev",
    },
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      992: {
        slidesPerView: 3.5,
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2.4,
      },
      480: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
}

if (
  document.querySelector(".slider-product") &&
  document.querySelector(".thumbs-product")
) {
  const thumbsSlider: Swiper = new Swiper(".thumbs-product", {
    modules: [Thumbs],
    spaceBetween: 14,
    slidesPerView: 3,
    grabCursor: true,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      992: {
        direction: "vertical",
      },
      768: {
        direction: "horizontal",
        slidesPerView: 6,
      },
      480: {
        slidesPerView: 4,
      },
    },
  });
  const sliderProduct: Swiper = new Swiper(".slider-product", {
    modules: [Pagination, Navigation, Thumbs],
    loop: true,
    spaceBetween: 14,
    grabCursor: true,
    speed: 800,
    pagination: {
      el: ".slider-product__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".nav-product-slider__button--next",
      prevEl: ".nav-product-slider__button--prev",
    },
    thumbs: {
      swiper: thumbsSlider,
    },
  });
}

type SwiperBreakpoints = {
  [width: number]: SwiperSettings;
  [ratio: string]: SwiperSettings;
};

type SwiperSettings = {
  spaceBetween?: number;
  slidesPerView?: number;
  freeMode?: boolean;
  breakpoints?: SwiperBreakpoints;
};

const resizableSlider = (
  breakpoint: string,
  swiperClassNames: string[],
  swiperSettings?: SwiperSettings,
): void => {
  const swipers: Record<string, Swiper> = {};

  const breakpointMediaQuery: MediaQueryList = window.matchMedia(breakpoint);

  const enableSwiper = (
    swiperClassName: string,
    settings?: SwiperSettings,
  ): void => {
    const element = document.querySelector(swiperClassName);

    if (element && !swipers[swiperClassName]) {
      swipers[swiperClassName] = new Swiper(swiperClassName, settings);
    }
  };

  const destroySwipers = (): void => {
    Object.values(swipers).forEach((swiper) => {
      if (swiper && !swiper.destroyed) {
        swiper.destroy();
      }
    });
    Object.keys(swipers).forEach((key) => delete swipers[key]);
  };

  const checker = (): void => {
    if (breakpointMediaQuery.matches) {
      swiperClassNames.forEach((swiperClassName) => {
        enableSwiper(swiperClassName, swiperSettings);
      });
    } else {
      destroySwipers();
    }
  };

  breakpointMediaQuery.addEventListener("change", checker);
  checker();
};

resizableSlider(
  "(max-width: 991.98px)",
  [".products__slider--arrival", ".products__slider--selling"],
  {
    spaceBetween: 20,
    freeMode: true,
    breakpoints: {
      768: {
        slidesPerView: 3.2,
      },
      640: {
        slidesPerView: 2.6,
      },
      480: {
        slidesPerView: 2.2,
      },
      390: {
        slidesPerView: 1.5,
      },
      320: {
        slidesPerView: 1.2,
      },
    },
  },
);
