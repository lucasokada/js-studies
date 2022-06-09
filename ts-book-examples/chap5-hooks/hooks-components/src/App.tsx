import { useCallback, useReducer, useState } from "react";
import Greeting from "./GreetingFunctional";

function App() {
  const reducer = (state: any, action: any) => {
    console.log("enteredNameReducer");
    switch (action.type) {
      case "enteredName":
        if (state.enteredName === action.payload) {
          return state;
        }

        return { ...state, enteredName: action.payload };

      case "message":
        return {
          ...state,
          message: `Hello, ${action.payload}`,
        };

      default:
        throw new Error("Invalid action type " + action.type);
    }
  };

  const initialState = {
    enteredName: "",
    message: "",
  };

  const [{ message, enteredName }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);
  const setCountCallback = useCallback(() => {
    const inc =
      count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;
    setCount(inc);
  }, [count, startCount]);
  const onWelcomeBtnClick = () => {
    setCountCallback();
  };

  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Greeting
          message={message}
          enteredName={enteredName}
          greetingDispatcher={dispatch}
        />
        <div style={{ marginTop: "10px" }}>
          <label>Enter a number and we'll increment it</label>
          <br />
          <input
            value={startCount}
            onChange={onChangeStartCount}
            style={{ width: ".75rem" }}
          />
          &nbsp;
          <label>{count}</label>
          <br />
          <button onClick={onWelcomeBtnClick}>Increment count</button>
        </div>
      </header>
    </div>
  );
}
export default App;
