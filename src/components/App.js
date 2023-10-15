import { useState } from "react";
import Output from "./Output";
import Button from "./Button";

function App() {
  const [output, setOutput] = useState("");

  return (
    <div className="container">
      <div className="calculator">
        <div className="output">
          <Output output={output} />
        </div>
        <div className="keypad">
          <Button>Clear</Button>
          <Button>+-</Button>
          <Button>&divide;</Button>
          <Button setOutput={setOutput}>7</Button>
          <Button setOutput={setOutput}>8</Button>
          <Button setOutput={setOutput}>9</Button>
          <Button>&times;</Button>
          <Button setOutput={setOutput}>4</Button>
          <Button setOutput={setOutput}>5</Button>
          <Button setOutput={setOutput}>6</Button>
          <Button>-</Button>
          <Button setOutput={setOutput}>1</Button>
          <Button setOutput={setOutput}>2</Button>
          <Button setOutput={setOutput}>3</Button>
          <Button>+</Button>
          <Button setOutput={setOutput}>0</Button>
          <Button setOutput={setOutput}>.</Button>
          <Button>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
