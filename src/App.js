import React, { useState } from "react";

const App = () => {
  const [btnclick, setBtnClick] = useState("");
  const [ans, setAns] = useState("");
  const op = ["/", "*", "-", "+", "."];

  const digitCreation = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => calculationUpdate(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const calculationUpdate = (val) => {
    if (
      (op.includes(val) && btnclick === "") ||
      (op.includes(val) && op.includes(btnclick.slice(-1)))
    ) {
      return;
    }
    setBtnClick(btnclick + val);
    if (!op.includes(val)) {
      setAns(eval(btnclick + val).toString());
    }
  };
  //For result
  const calculateHandler = () => {
    setBtnClick(eval(btnclick).toString());
  };
  //For Delete Button
  const deleteHandler = () => {
    if (btnclick == "") {
      return;
    }

    const val = btnclick.slice(0, -1);

    setBtnClick(val);
  };

  return (
    <div className="base">
      <h1>Calculator Application</h1>
      <h4>-By Mayuresh Gajalwar</h4>
      <div className="App">
        <div className="calculator">
          <div className="display">
            {/* {ans ? <span>Answer({ans})</span> : ""}  */}
            {btnclick || "0"}
          </div>

          <div className="operators">
            <button onClick={() => calculationUpdate("+")}>+</button>
            <button onClick={() => calculationUpdate("-")}>-</button>
            <button onClick={() => calculationUpdate("/")}>/</button>
            <button onClick={() => calculationUpdate("*")}>*</button>
            <button onClick={deleteHandler}>DEL</button>
          </div>

          <div className="digits">
            {digitCreation()}
            <button onClick={() => calculationUpdate("0")}>0</button>
            <button onClick={() => calculationUpdate(".")}>.</button>
            <button onClick={calculateHandler}>ENTER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
