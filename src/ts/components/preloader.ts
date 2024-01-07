function preloader(): void {
	window.addEventListener('DOMContentLoaded', (): void => {
		const preloaderItem = document.querySelector('.preloader') as HTMLDivElement;
		if (preloaderItem) {
			const mediaFiles = document.querySelectorAll('img, video');
			let counter: number = 0;
			const mediaLoading = (): void => {
				counter++;
				if (counter === mediaFiles.length) {
					setTimeout((): void => {
						preloaderItem.classList.add('_hidden');
					}, 1600);
				}
			};
			Array.from(mediaFiles).forEach((mediaFile): void => {
				if ((mediaFile as HTMLImageElement || HTMLVideoElement).complete) {
					mediaLoading();
				} else {
					mediaFile.addEventListener('load', mediaLoading);
				}
			});
		}
	});
}

export default preloader;