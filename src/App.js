import { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState();
  const [output, setOutput] = useState(0);
  const [sign, setSign] = useState();
  const [show, setShow] = useState(false);

  function numOne() {
    if (output !== 0 ) {
      setOutput(output + "1");
    } else {
      setOutput(1);
    }
  }

  function numTwo() {
    if (output !== 0 ) {
      setOutput(output + "2");
    } else {
      setOutput(2);
    }
  }

  function numThree() {
    if (output !== 0 ) {
      setOutput(output + "3");
    } else {
      setOutput(3);
    }
  }

  function numFour() {
    if (output !== 0 ) {
      setOutput(output + "4");
    } else {
      setOutput(4);
    }
  }

  function numFive() {
    if (output !== 0 ) {
      setOutput(output + "5");
    } else {
      setOutput(5);
    }
  }

  function numSix() {
    if (output !== 0 ) {
      setOutput(output + "6");
    } else {
      setOutput(6);
    }
  }

  function numSeven() {
    if (output !== 0 ) {
      setOutput(output + "7");
    } else {
      setOutput(7);
    }
  }

  function numEight() {
    if (output !== 0 ) {
      setOutput(output + "8");
    } else {
      setOutput(8);
    }
  }

  function numNine() {
    if (output !== 0 ) {
      setOutput(output + "9");
    } else {
      setOutput(9);
    }
  }

  function numZero() {
    if (output !== 0 ) {
      setOutput(output + "0");
    } else {
      setOutput(0);
    }
  }

  function numNegative() {
    setOutput(-1 * output);
  }

  function numPercent() {
    setOutput(output/100);
  }

  function numDot() {
    
    if (output.toString().includes(".") === false) {
      setOutput(output + ".");
    }
  }

  function numAc() {
    setOutput(0);
    setInput();
    setSign();
  }

  function numDivide() {
    if (sign === undefined) {
      setInput(output);
      setSign("/");
      setOutput(0);
    } else {
      setSign("/");
    }
  }

  function numMulti() {
    if (sign === undefined) {
      setInput(output);
      setSign("*");
      setOutput(0);
    } else {
      setSign("*");
    }
  }

  function numSub() {
    if (sign === undefined) {
      setInput(output);
      setSign("-");
      setOutput(0);
    } else {
      setSign("-");
    }
  }

  function numSum() {
    if (sign === undefined) {
      setInput(output);
      setSign("+");
      setOutput(0);
    } else {
      setSign("+");
    }
  }

  function numEqual() {
    if (sign === "/") {
      setOutput(input / output);
      setInput();
      setSign();
    } else if (sign === "*") {
      setOutput(input * output);
      setInput();
      setSign();
    } else if (sign === "+") {
      setOutput(Number(input) + Number(output));
      setInput();
      setSign();
    } else if (sign === "-") {
      setOutput(input - output);
      setInput();
      setSign();
    } else if (sign === "^") {
      setOutput(input ** output);
      setInput();
      setSign();
    } else if (sign === "√") {
      setOutput(Math.pow(output, 1/input));
      setInput();
      setSign();
    } else if (sign === "log") {
      setOutput(Math.log(output) / Math.log(input));
      setInput();
      setSign();
    }
  }

  function numE() {
      setOutput(2.718281828459045);
  }

  function numPi() {
      setOutput(3.14159265359);
  }

  function numFactorial() {
    function factorial(output) {
      if (output <= 0) {
        output = 1;
      } else {
        output = output * factorial(output - 1)
      }
      return output;
    }
    setOutput(factorial(output));
  }

  function numHalf() {
    setOutput(1/output);
  }

  function numSquare() {
    setOutput(output ** 2);
  }

  function numCube() {
    setOutput(output ** 3);
  }

  function numPower() {
    if (sign === undefined) {
      setInput(output);
      setSign("^");
      setOutput(0);
    } else {
      setSign("^");
    }
  }

  function numSqrRoot() {
    setOutput(Math.sqrt(output));
  }

  function numCubeRoot() {
    setOutput(Math.cbrt(output));
  }

  function numPowerRoot() {
    if (sign === undefined) {
      setInput(output);
      setSign("√");
      setOutput(0);
    } else {
      setSign("√");
    }
  }

  function numLog() {
    setOutput(Math.log10(output));
  }

  function numLn() {
    setOutput(Math.log(output));
  }

  function numLogy() {
    if (sign === undefined) {
      setInput(output);
      setSign("log");
      setOutput(0);
    } else {
      setSign("log");
    }
  }

  function numSin() {
    setOutput(Math.sin(output * 0.0174532925));
  }

  function numCos() {
    setOutput(Math.cos(output * 0.0174532925));
  }

  function numTan() {
    setOutput(Math.tan(output * 0.0174532925));
  }

  function numNegSin() {
    setOutput(Math.asin(output) / 0.0174532925);
  }

  function numNegCos() {
    setOutput(Math.acos(output) / 0.0174532925);
  }

  function numNegTan() {
    setOutput(Math.atan(output) / 0.0174532925);
  }

  function showScientific() {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  function numDel() {
    setOutput(output.toString().split('').slice(0, -1).join(''))
  }

  return (
    <div className="App">
      <div className='input'>{ input } { sign }</div>
      <div className='output'>{ output }</div>
      <button onClick={ numAc } className='button'>AC</button>
      <button onClick={ numNegative } className='button'>+/-</button>
      <button onClick={ numDel } className='button'>del</button>
      <button onClick={ numDivide } className='button'>/</button><br/>
      <button onClick={ numSeven } className='button'>7</button>
      <button onClick={ numEight } className='button'>8</button>
      <button onClick={ numNine } className='button'>9</button>
      <button onClick={ numMulti } className='button'>*</button><br/>
      <button onClick={ numFour } className='button'>4</button>
      <button onClick={ numFive } className='button'>5</button>
      <button onClick={ numSix } className='button'>6</button>
      <button onClick={ numSub } className='button'>-</button><br/>
      <button onClick={ numOne } className='button'>1</button>
      <button onClick={ numTwo } className='button'>2</button>
      <button onClick={ numThree } className='button'>3</button>    
      <button onClick={ numSum } className='button'>+</button><br/>
      <button onClick={ showScientific } className='button'>scientific</button>
      <button onClick={ numZero } className='button'>0</button>
      <button onClick={ numDot } className='button'>.</button>
      <button onClick={ numEqual } className='button'>=</button>
      { show && <div className='scientific'>
          <button onClick={ numSquare } className='button'>x²</button>
          <button onClick={ numCube } className='button'>x³</button>
          <button onClick={ numPower } className='button'>xʸ</button>
          <button onClick={ numE } className='button'>e</button><br/>
          <button onClick={ numSqrRoot } className='button'>√X</button>
          <button onClick={ numCubeRoot } className='button'>∛X</button>
          <button onClick={ numPowerRoot } className='button'>ʸ√X</button>
          <button onClick={ numPercent } className='button'>%</button><br/>
          <button onClick={ numLog } className='button'>log¹⁰</button>
          <button onClick={ numLn } className='button'>ln</button>
          <button onClick={ numLogy } className='button'>logʸ</button>
          <button onClick={ numPi } className='button'>π</button><br/>
          <button onClick={ numSin } className='button'>sin</button>
          <button onClick={ numCos } className='button'>cos</button>
          <button onClick={ numTan } className='button'>tan</button>
          <button onClick={ numFactorial } className='button'>x!</button><br/>
          <button onClick={ numNegSin } className='button'>sin⁻¹</button>
          <button onClick={ numNegCos } className='button'>cos⁻¹</button>
          <button onClick={ numNegTan } className='button'>tan⁻¹</button>
          <button onClick={ numHalf } className='button'>1/x</button><br/>
        </div> }
    </div>
  );
}

export default App;
