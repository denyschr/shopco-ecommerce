function goToTopInit() {
	const goToTopBtn = document.querySelector('.go-to-top') as HTMLButtonElement;
	goToTopBtn.addEventListener('click', goToTop);
	window.addEventListener('scroll', (): void => {
		scrollTracker(goToTopBtn);
	});
}

function goToTop() {
	if (window.scrollY > 0) {
		window.scrollBy(0, -15);
		setTimeout(goToTop, 0);
	}
}

function scrollTracker(btn: HTMLButtonElement) {
	const scrollOffset: number = window.scrollY;
	const currentScreenSize: number = document.documentElement.clientHeight;
	if (scrollOffset > currentScreenSize) {
		btn.classList.add('_active');
	} else {
		btn.classList.remove('_active');
	}
}

export default goToTopInit;