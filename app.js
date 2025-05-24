// TODO: Select all .accordion__question buttons
// TODO: Loop through each button and attach click event
// TODO: On click:
//    - If this question is already open:
//        - Hide its answer (add .hidden)
//        - Change icon to plus
//    - Else:
//        - Close any other open answer (add .hidden, reset icon to plus)
//        - Show this answer (remove .hidden)
//        - Change icon to minus

const questions = document.querySelectorAll('.accordion__question')

questions.forEach((question) => {
	question.addEventListener('click', () => {
		const item = question.closest('.accordion__item')
		const answer = item.querySelector('.accordion__answer') // grab the answer inside the item
		console.log(answer.classList) // log the classes

		if (answer.classList.contains('hidden')) {
			answer.classList.remove('hidden') // Show answer
		} else {
			answer.classList.add('hidden') // Hide answer
		}
	})
})

// left to do:
//  change the icon when clicked
//  change the icon of the first at start
//  when clicked, change the other questions
