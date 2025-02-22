const data = [
        {
            id:1,
            question: "Where was India’s first national Museum opened?",
            answers: [
                    {answer: "Delhi", isCorrect: false},
                    {answer: "Mumbai", isCorrect: true},
                    {answer: "Rajasthan", isCorrect:false},
                    {answer: "Hyderabad", isCorrect: false},
                ]
        }, 
        {
            id:2,
            question: "Which is the first country to launch 5G mobile network?",
            answers: [
                    {answer: "South Korea", isCorrect: true},
                    {answer: "Japan", isCorrect: false},
                    {answer: "USA", isCorrect: false},
                    {answer: "France", isCorrect: false},
                ]
        }, 
        {
            id:3,
            question: "The green planet in the solar system is?",
            answers: [
                    {answer: "Venus", isCorrect:false},
                    {answer: "Mars", isCorrect:false},
                    {answer: "Uranus", isCorrect:true},
                    {answer: "Earth", isCorrect:false},
                ]
        },
        {
            id:4,
            question: "Who is the father of Indian missile technology?",
            answers: [
                    {answer: "Dr U.R. Rao", isCorrect:false},
                    {answer: "Dr Chidambaram", isCorrect:false},
                    {answer: "Dr Homi Bhabha", isCorrect:false},
                    {answer: "Dr A.P.J. Abdul Kalam", isCorrect: true},
                ]
        },
        {
            id:5,
            question: "Which of these is the plant important in sericulture?",
            answers: [
                {answer: "Pea", isCorrect:false},
                {answer: "Mulberry", isCorrect:true},
                {answer: "Cassia", isCorrect:false},
                {answer: "Legumes", isCorrect:false},
             ]
        }
]

let gameScreen = document.querySelector(".game");
let resultScreen = document.querySelector(".result");
let quest = document.querySelector(".question");
let answerContainer = document.querySelector(".answers");
let submit = document.querySelector(".submit");
let play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    selectedAnswer;
    showQusetion(qIndex);
}

play.addEventListener("click", () => {
    gameScreen.style.display = "block";
    resultScreen.style.display = "none";
    playAgain();
})

const showQusetion = (qNumber) => {
    if (qIndex === data.length){
        showResult();
    }
    selectedAnswer = null;
    quest.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].answers.map((item, index) => 
        `<div class="choice">
            <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
            <label for=${index}>${item.answer}</label>
        </div>`
    ).join("")

    showAnswer();
}

const showAnswer = () => {
    answerContainer.querySelectorAll("input").forEach( (el) => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer === null){
            alert("Select an Answer");
        }
        else{
            (selectedAnswer === 'true') ? correctCount++ : wrongCount++;
            qIndex++;
            showQusetion(qIndex);
        }
    })
}

const showResult = () => {
    gameScreen.style.display = "none";
    resultScreen.style.display = "block";
    document.querySelector(".correct").textContent = `Correct Answer: ${correctCount}`;
    document.querySelector(".wrong").textContent = `Wrong Answer: ${wrongCount}`;
    document.querySelector(".score").textContent = `Score: ${(correctCount)*10}`;

}
showQusetion(qIndex);
submitAnswer();