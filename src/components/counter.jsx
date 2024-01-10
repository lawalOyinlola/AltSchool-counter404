import { useNavigate } from "react-router-dom";
import { RotateCcw } from "react-feather";
import { Link } from "react-router-dom";
import useCounter from "../hooks/useCounter";
import "./counter.css";

function Nav() {
  const display = useNavigate();
  function triggerError() {
    try {
      // Simulating an error
      let listCountries;
      console.log(listCountries.target.value);
    } catch (error) {
      display("/error");
    }
  }

  return (
    <div className="box">
      <Link to="/">HomePage</Link>
      <a onClick={triggerError}>Test Error Handling</a>
      <Link to="/notfound">404 Error</Link>
    </div>
  );
}

function Counter() {
  const display = useNavigate();
  const {
    count,
    setCount,
    margin,
    setMargin,
    isEditing,
    toggleEdit,
    increment,
    decrement,
    reset,
    setValue,
  } = useCounter();

  return (
    <div className="counter">
      <div className="container">
        <form className="value" onSubmit={setValue}>
          <p className="heading">Count is:</p>
          {isEditing ? (
            <input
              type="text"
              placeholder={count}
              maxLength={8}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          ) : (
            <h1 onClick={toggleEdit}>
              {isNaN(count) || count.toString().length > 8
                ? display("/error")
                : count}
            </h1>
          )}
          {!isEditing ? (
            <a onClick={toggleEdit}>Set Value</a>
          ) : (
            <button>Save</button>
          )}
        </form>
        <div className="margin">
          <output>
            <span>Set Margin:</span>
          </output>
          <input
            className="slider"
            type="range"
            min="0"
            max="10"
            value={margin}
            onChange={(e) => setMargin(Number(e.target.value))}
          />
          <span>{margin}</span>
        </div>
        <div className="btn">
          <button title="Decrease count by set margin" onClick={decrement}>
            Decrement
          </button>
          <button title="Reset count" onClick={reset}>
            <RotateCcw />
          </button>
          <button title="Increase count by set margin" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Counter;
