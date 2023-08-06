import { useState } from "react";

function Display(props) {
  const question = props.question;
  const [showAnswer, setShowAnswer] = useState(false);
  const [counter, setCounter] = useState(0);

  const answerHandle = () => {
    setShowAnswer(!showAnswer);
  };
  if (question) {
    return (
      <div>
        <div>
          <h2>
            Score:<span className="counter">{counter}</span>
          </h2>
          <button
            className="btn-counter-dec"
            onClick={() => setCounter(counter - 100)}
          >
            Decrease
          </button>
          <button
            className="btn-counter-inc"
            onClick={() => setCounter(counter + 100)}
          >
            Increase
          </button>
          <button className="btn-counter-res" onClick={() => setCounter(0)}>
            Reset
          </button>
        </div>
        <div>
          <h2>
            QUESTION:
            <span className="question-datais">{question[0].question}</span>
          </h2>
          <h3>
            CATEGORY:{" "}
            <span className="question-datais">
              {question[0].category.title}
            </span>
          </h3>
          <h3>
            POINTS: <span className="question-datais">{question[0].value}</span>
          </h3>
        </div>
        <div>
          <h3>
            {" "}
            <button className="btn-showAnswer" onClick={answerHandle}>
              {!showAnswer ? "Click to Reveal Question" : "Click to Hide"}
            </button>
          </h3>
          <h3>{showAnswer ? `Answer is: ` + question[0].answer : null}</h3>
        </div>
      </div>
    );
  } else {
    return <h3>Lets's play!</h3>;
  }
}

export default Display;
