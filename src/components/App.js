import { useState } from "react";
import Output from "./Output";
import Button from "./Button";
import Compute from "./Compute";

function App() {
  const [output, setOutput] = useState("");
  const [compute, setCompute] = useState("");

  const handleAddOutput = function (value) {
    if (output === eval(compute.slice(0, compute.length - 3))) {
      setOutput(value);
      setCompute("");
    } else {
      setOutput(output + value);
    }
  };

  const handleComputation = function (sign) {
    setCompute(compute + output + ` ${sign} `);
    setOutput("");
  };

  const handleClear = function () {
    setOutput("");
    setCompute("");
  };

  const handleEquation = function (sign) {
    setCompute(compute + output + ` ${sign} `);
    const expression = compute.replace(/÷/g, "/") + output;
    const result = eval(expression);
    setOutput(result);
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="computation">
          <Compute compute={compute} />
        </div>
        <div className="output">
          <Output output={output} />
        </div>
        <div className="keypad">
          <Button className="highlighted" onClick={handleClear}>
            Clear
          </Button>
          <Button className="highlighted">+-</Button>
          <Button
            className="highlighted"
            onClick={(e) => handleComputation(e.target.innerText)}
          >
            &divide;
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            7
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            8
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            9
          </Button>
          <Button
            className="highlighted"
            value="*"
            onClick={(e) => handleComputation(e.target.value)}
          >
            &times;
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            4
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            5
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            6
          </Button>
          <Button
            className="highlighted"
            onClick={(e) => handleComputation(e.target.innerText)}
          >
            -
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            1
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            2
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            3
          </Button>
          <Button
            className="highlighted"
            onClick={(e) => handleComputation(e.target.innerText)}
          >
            +
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            0
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            .
          </Button>
          <Button
            className="highlighted"
            onClick={(e) => handleEquation(e.target.innerText)}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
