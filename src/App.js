import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"

export default function App() {
    
  const [quiz, setQuiz] = React.useState({})
  const [category, setCategory] = React.useState(0)
  const [difficulty, setDifficulty] = React.useState("medium")
  const [quizGenerated, setQuizGenerated] = React.useState(false)
    
  function handleDifficulty(event) {
    setDifficulty(event.target.value)
  }
    
  function handleCategory(event) {
    setCategory(event.target.checked)
  }

  const handleQuiz = React.useCallback(()=> {
    setQuizGenerated(prevState => !prevState)}
  ,[])
   
  React.useEffect(()=> {
    fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => setQuiz(data))
    },
  [category, difficulty, handleQuiz])
    
  return(
    <div>
      {!quizGenerated && <Start
        handleDifficulty={handleDifficulty}
        handleCategory={handleCategory}
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