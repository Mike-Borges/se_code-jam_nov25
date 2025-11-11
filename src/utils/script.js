import { enableValidation, disableBtnElement } from "../validation.js";

import { settings, data } from "./constants.js";

const questionElement = document.querySelector(".test__question");
const cardsList = document.querySelector(".cards__list");
const buttonElement = document.querySelector(".submit__btn");
const quizzForm = document.querySelector(".test__form");
const cardTemplate = document
  .querySelector(".test-answer-template")
  .content.querySelector(".card");
const personalityResult = document.querySelector(".final-results__personality");
const personalityResultImg = document.querySelector(".final-results__img");
const modal = document.querySelector(".modal");
const startBtn = modal.querySelector(".modal__start");

let total = 0;
let questionNumber = 0;

function getAnswers(number) {
  const answerArray = data[number].answer;

  function getAnswerInput(answer, index) {
    const cardElement = cardTemplate.cloneNode(true);
    const answerElement = cardElement.querySelector(".card__answers");
    const answerInput = cardElement.querySelector(".test__answer");
    const labelElement = cardElement.querySelector("label");

    answerElement.textContent = answer;
    answerInput.id = `testAnswer${number}-${index + 1}`;
    answerInput.value = data[number].values[index];
    labelElement.setAttribute("for", `testAnswer${number}-${index + 1}`);

    return cardElement;
  }

  answerArray.forEach((answer, index) => {
    cardsList.append(getAnswerInput(answer, index));
  });

  disableBtnElement(buttonElement, settings);
}

quizzForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const checkedCard = cardsList.querySelector(":checked");

  if (checkedCard) {
    const answerValue = Number(checkedCard.value);
    total += answerValue;
    console.log("Selected value:", answerValue);
    console.log("Total:", total);
  }

  const oldCards = cardsList.querySelectorAll(".card");
  oldCards.forEach((card) => {
    card.remove();
  });

  questionNumber += 1;

  if (questionNumber <= 3) {
    getAnswers(questionNumber);
    questionElement.textContent = data[questionNumber].question;
    buttonElement.textContent = questionNumber === 3 ? "Submit" : "Next";
  } else {
    questionElement.textContent = "YOUR FINAL RESULTS";
    personalityResult.style.display = "block";
    personalityResultImg.style.display = "block";
    buttonElement.style.display = "none";
  }

  disableBtnElement(buttonElement, settings);
  enableValidation(settings);
});

getAnswers(questionNumber);
questionElement.textContent = data[questionNumber].question;

startBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

enableValidation(settings);
