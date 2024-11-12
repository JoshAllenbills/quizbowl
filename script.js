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
    "How old is Jeffery?",
    "What is 938 x 54/ 24?",
    "What is my last name spelt backwards?",
    "What is the capital of croatia?",
    "What is 2 + 24?",
    "Name a not color.",
    "What is the largest planet in your solar system?",
    "What is the square root of 85?",
    "Who wrote 'To Kill a Mockingbird'?",
    "What is the boiling point of water in Celsius?"
];

let currentQuestionIndex = 0;