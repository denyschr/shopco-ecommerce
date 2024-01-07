import * as noUiSlider from 'nouislider';
// import wNumb from 'wnumb';

const rangeItems = document.querySelectorAll('[data-range]');
if (rangeItems.length) {
	rangeItems.forEach(rangeItem => {
		const rangeSlider = rangeItem.querySelector('[data-range-slider]');
		const fromValue = rangeItem.querySelector('[data-range-from]');
		const toValue = rangeItem.querySelector('[data-range-to]');
		// const inputs = [fromValue, toValue];
		const range = noUiSlider.create(rangeSlider, {
			start: [Number(fromValue.dataset.rangeFrom), Number(toValue.dataset.rangeTo)],
			connect: true,
			range: {
				'min': [Number(fromValue.dataset.rangeFrom)],
				'max': [Number(toValue.dataset.rangeTo)]
			},
			// format: wNumb({
			// 	decimals: 0,
			// 	prefix: '$',
			// }),
		});
		// range.on('update', function (values, handle) {
		// 	inputs[handle].value = values[handle];
		// });
	});
}