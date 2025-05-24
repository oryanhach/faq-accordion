const questions = document.querySelectorAll('.accordion__question')

questions.forEach((question) => {
	question.addEventListener('click', () => {
		const item = question.closest('.accordion__item')
		const answer = item.querySelector('.accordion__answer')
		const img = item.querySelector('img')

		// Close all other answers
		document.querySelectorAll('.accordion__item').forEach((otherItem) => {
			if (otherItem !== item) {
				const otherAnswer =
					otherItem.querySelector('.accordion__answer')
				const otherImg = otherItem.querySelector('img')
				otherAnswer.classList.add('hidden')
				otherImg.src = 'assets/images/icon-plus.svg'
			}
		})

		if (answer.classList.contains('hidden')) {
			answer.classList.remove('hidden') // Show answer

			img.src = 'assets/images/icon-minus.svg'
		} else {
			answer.classList.add('hidden') // Hide answer

			img.src = 'assets/images/icon-plus.svg'
		}
	})
})
