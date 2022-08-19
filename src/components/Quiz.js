// importing React for Hooks, Questions component, css, and decorative images

import React from "react"
import Questions from "./Questions"
import "./Quiz.css"
import blob3 from "../images/blob3.png"
import blob4 from "../images/blob4.png"


// composing and exporting Quiz component

export default function Quiz(props) {
    
    
    // mapping the quiz into objects and setting them to questionsArray state

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
    

    const [quizFinished, setQuizFinished] = React.useState(false)  // tracks whether the quiz is finished to show results
    const [correctAnswerCount, setCorrectAnswerCount] = React.useState(0)  // tracks the correctly chosen answers
    

    // declaring a function that sets quizFinished to true to show correctAnswerCount

    function handleAnswers() {
        setQuizFinished(true)
    }


    // using Effect hook to count the correctAnswers as multiple states involved

    React.useEffect(() => {

        let currentCount = 0  // initiliasing a variable that wil reset to prevent count from stacking

        //using a for each to count the correctAnswers
        questionsArray.forEach(question => {

            question.chosenAnswer === question.correctAnswer && currentCount++
            setCorrectAnswerCount(currentCount)

        })

    }, [questionsArray, quizFinished])
    
  
    // composing the JSX

    return(

        <div className="quiz">

            <img className="blob3" src={blob3} alt="" /> 

            <Questions 

                questionsArray={questionsArray}
                setQuestionsArray={setQuestionsArray}
                quizFinished={quizFinished}

            />

            <div className="quiz--finished">

                {/* conditionally rendering the quiz results when the quiz is finished */}
                {quizFinished && <h3 className="quiz--count">{correctAnswerCount}/5 CORRECT</h3>} 

                {/* using a ternary to determine whether to show results or return to Start */}
                <button className="quiz--check" onClick={quizFinished ? props.handleQuiz : handleAnswers}>
                    {quizFinished ? 'Menu' : 'Check Answers'}
                </button>

            </div>

            <img className="blob4" src={blob4} alt="" />

        </div>

    )
}