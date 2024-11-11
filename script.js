const submitButton = document.querySelector('.submit');
const header = document.querySelector('.header');
const score = document.querySelector('.score');
const questions = document.querySelector('.questions');
const inputContainer = document.querySelector('.input-container');
const outputContainer = document.querySelector('.output-container');
const submitSwitch = document.getElementById("submit-switch");
submitSwitch.addEventListener("click", () => {
    document.getElementById('name').value = '';

    currentQuestionIndex = (currentQuestionIndex + 1) % questionsArray.length;
    document.querySelector('.questions').textContent = questionsArray[currentQuestionIndex];
});

const questionsArray = [
    "How old is ben?",
    "What is 404 x 30 / 5?",
    "What is my first name backwards?"
];

let currentQuestionIndex = 0;