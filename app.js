const questions = document.querySelectorAll(`.question`);

questions.forEach(function (question) {
	const btn = question.querySelector(`.question-btn`);
	btn.addEventListener(`click`, function (e) {
		// console.log(question);
		questions.forEach(function (item) {
			console.log(item);
			if (item !== question) {
				item.classList.remove(`show-text`);
				// console.log(item);
			}
		});
		question.classList.toggle(`show-text`);
	});
});
