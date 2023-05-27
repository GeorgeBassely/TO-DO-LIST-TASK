const getMyElem = (selector) => document.querySelector(selector);

const addForm = getMyElem("#addForm");
const cardsContainer = getMyElem(".cards-container");
const titleInput = getMyElem("#title-input");
const titleError = getMyElem("#title-error");
const descriptionInput = getMyElem("#discription-input");
const descriptionError = getMyElem("#discription-error");

const errors = {};

addForm.addEventListener("submit", function (e) {
	e.preventDefault();
	const title = titleInput.value.trim();

	if (!title.length) errors.title = "title is empty";
	else if (title.length > 20 || title.length < 5)
		errors.title = "title must be between 5 and 20 characters";
	else {
		errors.title = "";
	}
	titleError.innerHTML = errors.title;

	const description = descriptionInput.value.trim();
	if (!description.length) errors.description = "description is empty";
	else if (description.length > 300 || description.length < 5)
		errors.description = "description must be between 5 and 300 characters";
	else {
		errors.description = "";
	}
	descriptionError.innerHTML = errors.description;

	if (!!!errors.title && !!!errors.description) {
		addCard(title, description);
	}
});

function addCard(title, description) {
	cardsContainer.innerHTML += `
      <div class="card new-card col-4 p-3">
        <h1>${title}</h1>
        <p>${description}</p>
        <div class="d-flex btns">
          <button class="btn btn-success btn-complete" onclick="complete(event)">complete task</button>
          <button class="btn btn-danger btn-remove" onclick="remove(event)">remove task</button>
        </div>
      </div>
  `;
}

function complete(event) {
	const card = event.target.parentNode.parentNode;
	const isNew = card.classList.contains("new-card");
	isNew ? card.classList.remove("new-card") : card.classList.add("new-card");
}

function remove(event) {
	const card = event.target.parentNode.parentNode;
	card.remove();
}
