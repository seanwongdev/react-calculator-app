import { useState } from "react";
import Output from "./Output";
import Button from "./Button";
import Compute from "./Compute";

function App() {
  const [output, setOutput] = useState("");
  const handleAddOutput = function (value) {
    setOutput(output + value);
  };

  const handleClear = function () {
    setOutput("");
  };

  const handleEquate = function () {};

  return (
    <div className="container">
      <div className="calculator">
        <div className="computation">
          <Compute />
        </div>
        <div className="output">
          <Output output={output} />
        </div>
        <div className="keypad">
          <Button onClick={handleClear}>Clear</Button>
          <Button>+-</Button>
          <Button>&divide;</Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            7
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            8
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            9
          </Button>
          <Button>&times;</Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            4
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            5
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            6
          </Button>
          <Button>-</Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            1
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            2
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            3
          </Button>
          <Button>+</Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            0
          </Button>
          <Button onClick={(e) => handleAddOutput(e.target.innerText)}>
            .
          </Button>
          <Button>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
