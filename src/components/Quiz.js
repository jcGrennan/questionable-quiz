import React from "react"
import Questions from "./Questions"

export default function Quiz(props) {
    
    const [questionsArray, setQuestionsArray] = React.useState(
        props.quiz.map(question => (
            {
                question: question.question,
                correctAnswer: question.correct_answer,
                incorrectAnswers: question.incorrect_answers,
                chosenAnswer: "",
            }
            
        ))
    )
    
    const [correctAnswerCount, setCorrectAnswerCount] = React.useState(0)
    const [quizFinished, setQuizFinished] = React.useState(false)
    
    function handleAnswers() {
        setQuizFinished(true)
    }
    
    React.useEffect(()=> {
        questionsArray.map(question => {
            question.chosenAnswer === question.correctAnswer &&
            setCorrectAnswerCount(prevCount => prevCount + 1)
        })
    },[quizFinished])
  
    return(
        <div className="quiz">
            <img className="blob3" src="../images/blob3.png" /> 
            <Questions 
                questionsArray={questionsArray}
                setQuestionsArray={setQuestionsArray}
                quizFinished={quizFinished}
            />
            <div className="quiz--finished">
                {quizFinished && 
                    <h3 className="quiz--count">{correctAnswerCount}/5 CORRECT</h3>}
                <button 
                    onClick={quizFinished ? props.handleQuiz : handleAnswers}
                    className="quiz--check">
                    {quizFinished ? 'Menu' : 'Check Answers'}
                </button>
            </div>
            <img className="blob4" src="../images/blob4.png" />
        </div>
    )
}