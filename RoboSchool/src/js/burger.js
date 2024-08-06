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
		if (e.target.classList.contains('nav__body')) {
			nav.classList.remove('_active')
			burger.classList.remove('_active')
			body.classList.remove('_lock')
		}
	})
}