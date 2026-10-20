const questions = [
    {
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: ["Computer Personal Unit", "Central Program Utility", "Core Processing Utility"]
    },
    {
        question: "Which animal is the largest living mammal?",
        correct_answer: "Blue whale",
        incorrect_answers: ["African elephant", "Sperm whale", "Giraffe"]
    },
    {
        question: "What is the chemical formula for water?",
        correct_answer: "H2O",
        incorrect_answers: ["HO2", "H2O2", "OH"]
    },
    {
        question: "What is the derivative of x²?",
        correct_answer: "2x",
        incorrect_answers: ["x", "x²", "2"]
    },
    {
        question: "Which data structure uses the LIFO (Last In, First Out) principle?",
        correct_answer: "Stack",
        incorrect_answers: ["Queue", "Array", "Linked list"]
    },
    {
        question: "How many hearts does an octopus have?",
        correct_answer: "3",
        incorrect_answers: ["1", "2", "8"]
    },
    {
        question: "What is the atomic number of carbon?",
        correct_answer: "6",
        incorrect_answers: ["8", "12", "4"]
    },
    {
        question: "What is the value of 7 × 8?",
        correct_answer: "56",
        incorrect_answers: ["54", "48", "63"]
    },
    {
        question: "Which of these is NOT a programming language?",
        correct_answer: "HTML",
        incorrect_answers: ["Python", "Java", "C++"]
    },
    {
        question: "Which bird is the only one known to be able to fly backwards?",
        correct_answer: "Hummingbird",
        incorrect_answers: ["Swift", "Kingfisher", "Sparrow"]
    }
];

let correctScore = 0;
let totalAnswered = 0;


function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);

    return questions[randomIndex];
}


function renderQuestion() {
    const questionContainer = document.getElementById("questionContainer");

    questionContainer.innerHTML = "";

    const randomQuestion = getRandomQuestion();

    const questionText = document.createElement("p");

    questionText.innerHTML = randomQuestion.question;

    questionContainer.appendChild(questionText);

    const feedback = document.createElement("p");
    questionContainer.appendChild(feedback);

    const answers = [
        randomQuestion.correct_answer,
        ...randomQuestion.incorrect_answers
    ];

    answers.sort(function () {
        return Math.random() - 0.5;
    });

    answers.forEach(function (answer) {
        const answerButton = document.createElement("button");

        answerButton.innerHTML = answer;

        answerButton.addEventListener("click", function () {

            totalAnswered = totalAnswered + 1;

            if (answer === randomQuestion.correct_answer) {
                correctScore = correctScore + 1;
                feedback.innerHTML = "Correct!";
            } else {
                feedback.innerHTML = "Incorrect! The correct answer is " + randomQuestion.correct_answer;
            }

            const score = document.getElementById("score");
            score.innerHTML = "Score: " + correctScore + " / " + totalAnswered;

            const buttons = questionContainer.querySelectorAll("button");

            buttons.forEach(function (button) {
                button.disabled = true;
            });
        });

        questionContainer.appendChild(answerButton);
    });
}


const newQuestionButton = document.getElementById("newQuestion");

newQuestionButton.addEventListener("click", function () {
    renderQuestion();
});
