import React from "react"
import "./Start.css"
import blob1 from "../images/blob1.png"
import blob2 from "../images/blob2.png"

export default function Start(props) {
    return(
        <div className="start">
            
            <img src={blob1}  alt="" className="blob1" />
            
            <h1 className="start--title">Questionable</h1>
            <p className="start--description">
                A Randomly Generated Quiz of Five Multiple-Choice Questions!
            </p>
           
            <fieldset className="start--difficulty">
                <legend>Difficulty</legend>
                    <input 
                        type="radio" 
                        name="difficulty" 
                        id="easy" 
                        value="easy" 
                        checked={props.difficulty === "easy"}
                        onChange={props.handleDifficulty}
                    /> 
                    <label htmlFor="easy">Easy</label>
                    <br />
                            
                    <input 
                        type="radio" 
                        name="difficulty" 
                        id="medium" 
                        value="medium"
                        checked={props.difficulty === "medium"}                            
                        onChange={props.handleDifficulty}
                    />
                    <label htmlFor="medium">Medium</label>
                    <br />
                            
                    <input 
                        type="radio" 
                        name="difficulty" 
                        id="hard" 
                        value="hard"
                        checked={props.difficulty === "hard"}
                        onChange={props.handleDifficulty}
                    />
                    <label htmlFor="hard">Hard</label>
                    <br />
            </fieldset>
                    
            <button className ="start--quiz" 
                    onClick={props.handleQuiz}>
                Generate Quiz
            </button>
            
            <img src={blob2} alt="" className="blob2"/>
            
        </div>
    )
}