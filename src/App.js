// importing React to use State, Effect, and Callback Hooks. Importing the components

import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"


// composing and exporting the App

export default function App() {
   
  // setting up the States that need to be on the top level

  const [quiz, setQuiz] = React.useState({})  // an object that will hold the data fetched from an api
  const [category, setCategory] = React.useState(0)  // keeps track of the category chosen for the api fetch
  const [difficulty, setDifficulty] = React.useState("medium")  // keeps track of the difficulty chosen for the api fetch
  const [quizGenerated, setQuizGenerated] = React.useState(false)  //  a booelan to determine whether to render the Start or Quiz Component
    

  // declaring a function that sets the difficulty/category based on the event target

  function handleOptions(event) {

    // using a ternary to determine whether to set difficulty or cateogory
    event.target.name === "difficulty" ? setDifficulty(event.target.value) : setCategory(event.target.value)

  }
  

  // using Callback hook to switch between the Start and Quiz components

  const handleQuiz = React.useCallback(()=> {
    setQuizGenerated(prevState => !prevState)}
  ,[])


  // using Effect hook to fetch from an api and set the quiz data
   
  React.useEffect(()=> {

    fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => setQuiz(data))
  
  },[category, difficulty, quizGenerated])  
    

  // composing the JSX, passing props, conditionally rendering either Start or Quiz //

  return(

    <div>

      {!quizGenerated && <Start

        difficulty={difficulty}
        category={category}
        handleOptions={handleOptions}
        handleQuiz={handleQuiz}

      />}

      {quizGenerated && <Quiz 

        quiz={quiz.results}
        handleQuiz={handleQuiz}

      />}

    </div>

  )
}