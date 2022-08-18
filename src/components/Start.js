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

            <fieldset className="start--options">
                <legend>Category</legend>
                    <select 
                        id="category"
                        value={props.category}
                        onChange={props.handleCategory}
                        name="category"
                    >
                        <option value="0">All Categories</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Books</option>
                        <option value="11">Film</option>
                        <option value="12">Music</option>
                        <option value="13">Musicals &amp Theatre</option>
                        <option value="14">Television</option>
                        <option value="15">Video Games</option>
                        <option value="16">Board Games</option>
                        <option value="17">Science &amp Nature</option>
                        <option value="18">Computers</option>
                        <option value="19">Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Comics</option>
                        <option value="30">Gadgets</option>
                        <option value="31">Anime &amp Manga</option>
                        <option value="32">Cartoons &amp Animation</option>
                    </select>
            </fieldset>
           
            <fieldset className="start--options">
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