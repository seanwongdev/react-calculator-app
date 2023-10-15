import { useState } from "react";
import Output from "./Output";
import Button from "./Button";

function App() {
  const [output, setOutput] = useState("");
  const handleChangeOutput = function (value) {
    setOutput(value);
  };

  return (
    <div className="calculator">
      <div className="output">
        <Output output={output} onChangeOutput={handleChangeOutput} />
      </div>
      <div className="keypad">
        <Button>Clear</Button>
        <Button>+-</Button>
        <Button>&divide;</Button>
        <Button value="7">7</Button>
        <Button value="8">8</Button>
        <Button value="9">9</Button>
        <Button>&times;</Button>
        <Button value="4">4</Button>
        <Button value="5">5</Button>
        <Button value="6">6</Button>
        <Button>-</Button>
        <Button value="1">1</Button>
        <Button value="2">2</Button>
        <Button value="3">3</Button>
        <Button>+</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>
      </div>
      <img src="calculator.PNG"></img>
    </div>
  );
}

export default App;
