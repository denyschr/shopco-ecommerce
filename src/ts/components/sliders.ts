import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

if (document.querySelector('.name__slider')) {
	const slider: Swiper = new Swiper('.name__slider', {
		modules: [Pagination, Navigation, Autoplay],
		loop: true,
		speed: 800,
		// pagination: {
		// 	el: '.hero__pagination',
		// 	clickable: true,
		// },
		// navigation: {
		// 	nextEl: ".nav-hero__button--next",
		// 	prevEl: ".nav-hero__button--prev",
		// },
		// autoplay: {
		// 	delay: 6000,
		// },
	});
}

type SwiperBreakpoints = {
	[width: number]: SwiperSettings;
	[ratio: string]: SwiperSettings;
}

type SwiperSettings = {
	spaceBetween?: number;
	slidesPerView?: number;
	freeMode?: boolean;
	breakpoints?: SwiperBreakpoints,
}

const resizableSlider = (
	breakpoint: string,
	swiperClassNames: string[],
	swiperSettings?: SwiperSettings,
): void => {
	const swipers: Record<string, Swiper> = {};

	const breakpointMediaQuery: MediaQueryList = window.matchMedia(breakpoint);

	const enableSwiper = (swiperClassName: string, settings?: SwiperSettings): void => {
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

	breakpointMediaQuery.addEventListener('change', checker);
	checker();
};

resizableSlider(
	'(max-width: 991.98px)',
	[''],
	{
		spaceBetween: 20,
		freeMode: true,
		breakpoints: {
			// 768: {
			// 	slidesPerView: 3.6,
			// },
			// 640: {
			// 	slidesPerView: 3,
			// },
			// 480: {
			// 	slidesPerView: 2.4,
			// },
			// 320: {
			// 	slidesPerView: 1.5,
			// }
		}
	},
);