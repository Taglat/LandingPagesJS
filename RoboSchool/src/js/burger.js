const nav = document.querySelector('.nav')
const burger = document.querySelector('.header__burger')

const body = document.body;

if (nav && burger) {
	burger.addEventListener('click', e => {
		nav.classList.toggle('_active')
		burger.classList.toggle('_active')
		body.classList.toggle('_lock')
	})

	nav.addEventListener('click', e => {
		if (e.target.classList.contains('nav')) {
			nav.classList.remove('_active')
			burger.classList.remove('_active')
			body.classList.remove('_lock')
		}
	})

	nav.querySelectorAll('.nav__link').forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('_active')
			burger.classList.remove('_active')
			body.classList.remove('_lock')
		})
	})
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
})