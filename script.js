const slider = document.querySelector('.slider');
const sliderImg = document.querySelectorAll('.slider img');

let count = 0;

function run() {
	count++;
	if (count > sliderImg.length - 1) {
		count = 0;
	}

	slider.style.transform = 'translateY(' + -count * 700 + 'px)';
}
setInterval(() => {
	run();
}, 2000);
