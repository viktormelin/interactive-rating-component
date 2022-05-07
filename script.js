const submitButton = document.querySelector(".submit-button");
const selectionButtons = document.querySelectorAll("div.rating");
const ratingPage = document.querySelector(".rating-page");
const successPage = document.querySelector(".success-page");
let activeSelectionText = null;
let activeSelectionElement = null;

submitButton.onclick = () => {
	if (
		activeSelectionText &&
		window.getComputedStyle(successPage).display === "none"
	) {
		ratingPage.style.display = "none";
		successPage.style.display = "flex";

		document.querySelector("#submitted-rating").textContent =
			activeSelectionText;
		activeSelectionText = null;
	} else {
		console.error("You need to specify a rating before submitting!");
	}
};

for (const selection of selectionButtons) {
	selection.onclick = () => {
		if (activeSelectionElement)
			activeSelectionElement.classList.remove("selected-rating");

		activeSelectionElement = selection;
		selection.classList.add("selected-rating");
		activeSelectionText = selection.textContent;
	};
}
