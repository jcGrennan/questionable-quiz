import React from "react"
import {nanoid} from "nanoid"
import {decode} from "html-entities"

export default function Questions(props) {
    
    function handleAnswers(event) {
        props.setQuestionsArray(prevQuestionsArray => prevQuestionsArray.map(question => (
            question.question === event.target.name ?
                {...question, chosenAnswer: event.target.value} :
                {...question}
            ))
        )
    }
    
    const correctAnswerStyles = {
        background: props.quizFinished && "#94D7A2", 
        border: props.quizFinished && "none",
    }
    const incorrectAnswerStyles = {
        opacity: props.quizFinished && 0.5,
    }
        
    const questionElements = props.questionsArray.map(question => {
        
        const correctAnswerElements = 
            <div className="quiz--radio_buttons" key={nanoid()}>
                <input 
                    type="radio" 
                    id={question.correctAnswer}
                    name={question.question} 
                    value={question.correctAnswer}
                    checked={question.chosenAnswer === `${question.correctAnswer}`}
                    onChange={handleAnswers}
                    key={nanoid()}
                /> 
                <label 
                    htmlFor={question.correctAnswer}
                    style={correctAnswerStyles}
                >
                    {decode(question.correctAnswer)}
                </label>
            </div>
                
        const incorrectAnswerElements = question.incorrectAnswers.map(incorrectAnswer => {
                return (
                    <div className="quiz--radio_buttons" key={nanoid()}>  
                        <input 
                            type="radio"
                            id={incorrectAnswer}
                            name={question.question}
                            value={incorrectAnswer} 
                            checked={question.chosenAnswer === `${incorrectAnswer}`}
                            onChange={handleAnswers}
                            key={nanoid()}
                        />
                        <label
                            htmlFor={incorrectAnswer}
                            style={incorrectAnswerStyles}
                        >
                            {decode(incorrectAnswer)}
                        </label>
                    </div>
                )
        })
        
        const answerElements = [correctAnswerElements, ...incorrectAnswerElements]
        answerElements.sort((answer, nextAnswer) => 
            answer.props.children[0].props.id.localeCompare(nextAnswer.props.children[0].props.id))
        
        return (
            <div className="quiz--question_answer" key={nanoid()}>
                <h2 className="quiz--question" key={nanoid()}>{decode(question.question)}</h2>
                <div className="quiz--all_answers">{answerElements}</div>
                <hr className="quiz--hr"/>
            </div>      
        ) 
    })
    
    return (
        <div className="quiz--question_answer">{questionElements}</div>
    )
}