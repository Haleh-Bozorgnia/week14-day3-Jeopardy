import { useState } from "react";

function Display(props) {
  const question = props.question;
  const [showAnswer, setShowAnswer]= useState(false)
  const [counter, setCounter]= useState(0)

  const answerHandle = ()=>{
      setShowAnswer(!showAnswer)
  }
  if (question) {
    return (
      <div>
        <div>
          <h2>SCORE: {counter}</h2>
          <button onClick={() => setCounter(counter - 100)}>Decrease</button>
          <button onClick={() => setCounter(counter + 100)}>Increase</button>
          <button onClick={() => setCounter(0)}>Reset</button>
        </div>
        <div>
          <h2>QUESTION: {question[0].question}</h2>
          <h3>CATEGORY: {question[0].category.title}</h3>
          <h3>POINTS: {question[0].value}</h3>
        </div>
        <div>
          <h3>
            {" "}
            <button onClick={answerHandle}>
              {!showAnswer ? "Click to Reveal Question" : "Hide Question"}
            </button>
            <h3>{showAnswer ? question[0].answer : null}</h3>
          </h3>
        </div>
      </div>
    );
  } 
  else {
    return <h3>Lets's play</h3>;
  }
}

export default Display;
