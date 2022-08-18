import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"

export default function App() {
    
    const [quiz, setQuiz] = React.useState({})
    const [difficulty, setDifficulty] = React.useState("medium")
    const [quizGenerated, setQuizGenerated] = React.useState(false)
    
    function handleDifficulty(event) {
            setDifficulty(event.target.value)
    }
    
    function handleQuiz() {
        setQuizGenerated(prevState => !prevState)
    }
    
    React.useEffect(()=> {
        fetch(`https://opentdb.com/api.php?amount=5&difficulty=${difficulty}&type=multiple`)
            .then(res => res.json())
            .then(data => setQuiz(data))
    },[difficulty, handleQuiz])
    
    return(
        <div>
            {!quizGenerated && <Start
                difficulty={difficulty}
                handleDifficulty={handleDifficulty}
                handleQuiz={handleQuiz}
            />}
            {quizGenerated && <Quiz 
                quiz={quiz.results}
                handleDifficulty={handleDifficulty}
                handleQuiz={handleQuiz}
            />}
        </div>
    )
}