const submitButton = document.querySelector('.submit');
const header = document.querySelector('.header');
const scoreContainer = document.querySelector('.score');
const questions = document.querySelector('.questions');
const input = document.querySelector('.input-container');
const outputContainer = document.querySelector('.output-container');
const submitSwitch = document.getElementById("submit-switch");
let isFirstSubmission = true;

submitSwitch.addEventListener("click", () => {
    if (isFirstSubmission) {
        isFirstSubmission = false;
    } else {
        const userAnswer = document.getElementById('input-field').value;
        if (userAnswer === questionsArray[currentQuestionIndex].answer) {
            alert("GOOD BOY");
        } else {
            alert("BAD BOY");
        }
    }
    document.getElementById('input-field').value = '';
    currentQuestionIndex = (currentQuestionIndex + 1) % questionsArray.length;
    document.querySelector('.questions').textContent = questionsArray[currentQuestionIndex].question;
});

const questionsArray = [
    { question: "How old is BEN?", answer: "5" },
    { question: "What is 938 x 10 / 4?", answer: "2345" },
    { question: "What is my last name spelt backwards?", answer: "kajnikrujD" },
    { question: "What is the capital of Croatia?", answer: "Zagreb" },
    { question: "What is Mr.Cooper's first name?", answer: "Louis" },
    { question: "This is a Quiz____!", answer: "bowl" },
    { question: "Is Pluto a planet (in my heart)?", answer: "yes" },
    { question: "Who can rap faster, A human or AI?", answer: "AI" },
    { question: "Is the book 'Hunger Games' about hungry people playing some video games?", answer: "no" },
    { question: "DO YOU LIKE BACON SAY YES NOW", answer: "yes" }
];

let currentQuestionIndex = 0;
