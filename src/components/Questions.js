// importing dependencies
import {nanoid} from "nanoid"
import {decode} from "html-entities"


// composing and exporting the Questions component
export default function Questions(props) {
    

    // declaring a function that maps chosen answers into the questionsArray
    function handleAnswers(event) {

        const {name, value} = event.target // destructured event.target to save space below

        props.setQuestionsArray(prevQuestionsArray => prevQuestionsArray.map(question => (

            question.question === name ? {...question, chosenAnswer: value} : {...question}

        )))
    }


    // initialising objects for conditionally rendered styles for the quiz results
    const correctAnswerStyles = {background: props.quizFinished && "#94D7A2", border: props.quizFinished && "none",}
    const incorrectAnswerStyles = {opacity: props.quizFinished && 0.5,}


    // mapped the questionsArray into JSX elements
    const questionElements = props.questionsArray.map(question => {
        

        // first pairing the radio buttons for the correct answers to their questions
        const correctAnswerElements = (

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

                <label htmlFor={question.correctAnswer} style={correctAnswerStyles}>

                    {decode(question.correctAnswer)}

                </label>

            </div>
        )
                
        //then mapping the question and incorrect answer pairings
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

                        <label htmlFor={incorrectAnswer} style={incorrectAnswerStyles}>

                            {decode(incorrectAnswer)}

                        </label>

                    </div>
                )
        })
        

        // assigning them all to an array
        const answerElements = [correctAnswerElements, ...incorrectAnswerElements]


        // then sorting the answers alphabetically so the first answer won't always be the correct one.
        answerElements.sort((answer, nextAnswer) => 
            answer.props.children[0].props.id.localeCompare(nextAnswer.props.children[0].props.id
        ))
        

        // finally composing the questionElements JSX
        return (

            <div className="quiz--question_answer" key={nanoid()}>

                <h2 className="quiz--question" key={nanoid()}>{decode(question.question)}</h2>
                <div className="quiz--all_answers">{answerElements}</div>
                <hr className="quiz--hr"/>

            </div>      

        ) 
    })
    

    //composing the Questions component JSX
    return (
        <div className="quiz--question_answer">{questionElements}</div>
    )
    
}