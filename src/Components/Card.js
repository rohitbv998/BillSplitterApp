import Tipbutton from "./Tipbutton";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";
import { useState } from "react";

const Card = () => {
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  function handleChange(event) {
    setInput1(event.target.value);
  }

  function handleChange2(event) {
    setInput2(event.target.value);
  }

  let perperson = 0;

  function handleClick(percentage) {
    perperson=input1/input2;
    let pertip = (perperson*percentage)/100;
    setTip(pertip.toFixed(2));
    let pertotal = pertip+perperson;
    setTotal(pertotal.toFixed(2));
  }

  function reset(){
    setTotal(0);
    setTip(0);
    setInput1(0);
    setInput2(0);
  }

  return (
    <div className="container custom-card col-md-8">
      <div className="row">
        <div className="col">
          <p className="bill-style">Bill</p>
          <img src={dollar} className="dollar-style" alt="" />
          <input
            type="text"
            onChange={handleChange}
            className="bill-input-style"
            placeholder="0"
            name=""
            id=""
             value={input1}
          />
          <p>Select Tip %</p>
          <div className="container button-container-style">
            <div className="row">
              <Tipbutton handleClick={handleClick} percentage="5" />
              <Tipbutton handleClick={handleClick} percentage="10" />
              <Tipbutton handleClick={handleClick} percentage="15" />
            </div>
            <div className="row">
              <Tipbutton handleClick={handleClick} percentage="25" />
              <Tipbutton handleClick={handleClick} percentage="50" />
              <Tipbutton handleClick={handleClick} percentage="60" />
            </div>
          </div>
          <p className="number-of-peope-style">Number of People</p>
          <img src={person} className="dollar-style" alt="" />
          <input
            type="text"
            onChange={handleChange2}
            className="bill-input-style"
            placeholder="0"
            value={input2}
          />
        </div>
        <div className="col">
          <div className="container custom-card-display">
            <div className="row row1">
              <div className="col">
                <h3 className="custom-h3">Tip amount</h3>
                <p className="custom-p">/person</p>
              </div>
              <div className="col">
                <h1 className="custom-card-h1">{"$"+tip}</h1>
              </div>
            </div>
            <div className="row custom-card-row">
              <div className="col">
                <h3 className="custom-h3">Total</h3>
                <p className="custom-p">/person</p>
              </div>
              <div className="col">
                <h1 className="custom-card-h1">{"$"+total}</h1>
              </div>
            </div>
            <div className="row custom-card-button">
              <button onClick={reset} className="btn btn-light custom-card-btn">RESET</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
