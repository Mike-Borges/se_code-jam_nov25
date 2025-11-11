const settings = {
  formSelector: ".test__form",
  inputSelector: ".test__answer",
  submitButtonSelector: ".submit__btn",
  inactiveButtonClass: "submit__btn_inactive",
};

const data = [
  {
    question: "Do you have children?",
    answer: ["Yes, more than 1", "Yes, only 1", "Yes, one on the way", "No"],
    values: [1, 2, 3, 4],
  },
  {
    question: "Income level",
    answer: ["Low", "Medium", "High", "Very High"],
    values: [1, 2, 3, 4],
  },
  {
    question: "Spending level",
    answer: ["Save everything", "Moderate", "Spend freely", "Big spender"],
    values: [1, 2, 3, 4],
  },
  {
    question: "Online shopping habits",
    answer: ["Never", "Rarely", "Often", "Always"],
    values: [1, 2, 3, 4],
  },
];

export { settings, data };
