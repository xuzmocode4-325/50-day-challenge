const quizQuestions = [
    {
        question: "What is supervised learning?",
        answers: {
            a: "Learning from labeled data.",
            b: "Finding patterns in unlabeled data.",
            c: "Clustering similar items.",
            d: "Reducing data dimensions."
        },
        correctAnswer: "a"
    },
    {
        question: "What does overfitting mean?",
        answers: {
            a: "Model is too simple.",
            b: "Model performs well on training data but poorly on new data.",
            c: "Model generalizes well.",
            d: "Model uses too few features."
        },
        correctAnswer: "b"
    },
    {
        question: "What is a neural network?",
        answers: {
            a: "A type of decision tree.",
            b: "A model inspired by the human brain.",
            c: "A linear regression model.",
            d: "A clustering algorithm."
        },
        correctAnswer: "b"
    },
    {
        question: "What is feature engineering?",
        answers: {
            a: "Creating new input features from existing ones.",
            b: "Choosing the model architecture.",
            c: "Evaluating model performance.",
            d: "Tuning hyperparameters."
        },
        correctAnswer: "a"
    },
    {
        question: "What is a confusion matrix?",
        answers: {
            a: "A tool for visualizing model performance.",
            b: "A method for data preprocessing.",
            c: "A type of neural network layer.",
            d: "An optimization algorithm."
        },
        correctAnswer: "a"
    }
]

const quiz = document.getElementById('quiz')
const answersDiv = document.getElementById('answers')
const answerInputs = document.querySelectorAll('.answer')
const questionEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0; 

loadQuiz()

function loadQuiz() {
    const currentQuizData = quizQuestions[currentQuiz]
    const quizAnswers = currentQuizData.answers
    //console.log(currentQuizData.question)
    questionEL.innerText = currentQuizData.question
    a_text.innerText = quizAnswers.a
    b_text.innerText = quizAnswers.b
    c_text.innerText = quizAnswers.c
    d_text.innerText = quizAnswers.d
}

function deselectAnswers() {
    answerInputs.forEach(ans => {
        ans.checked = false
    });
}

function getSelected() {
    let answer

    answerInputs.forEach(ans => {
        if (ans.checked) {
            answer = ans.id
        }
    })
    deselectAnswers()
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    //console.log(answer)

    if (answer) {
        if (answer == quizQuestions[currentQuiz].correctAnswer) {
            score ++;
        }

        currentQuiz ++ 

        if (currentQuiz < quizQuestions.length) {
            loadQuiz()
        } else {
            quiz.innerHTML= `
            
            <h2 class="text-center">Quiz Complete</h2>
    
            <h3 class="text-center mt-10">You Scored:</h3>

            <p class="text-center text-2xl mt-10 font-bold">
                ${score} / ${quizQuestions.length}
            </p>

            <button onclick="location.reload()"
            class="transition-all duration-300 mt-10 w-full
            py-2 px-3 bg-indigo-600 rounded-md text-emerald-50 
            border border-indigo-500 hover:bg-indigo-900">
            Reload </button>
            `
        }
    }
 })