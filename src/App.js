import { useState } from "react";
import Display from "./Components/Display";
import ControlledForm from "./Components/ControlledForm";

import "./App.css";

function App() {
  const [question, setQuestion] = useState();
  return (
    <div className="App">
      <h1 className="wellcome"> Wellcome To Jeopardy!</h1>
      <ControlledForm setQuestion={setQuestion} />
      <Display question={question} />
    </div>
  );
}

export default App;
