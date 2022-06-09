import { useReducer } from "react";
import Greeting from "./GreetingFunctional";

function App() {
  /*
  A função reducer tem parâmetros any, já que essa tenta tratar diferentes tipos de ações,
  retornando um novo objeto de estado apropriado para cada tipo.
   */
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
    //estudar o hook useReducer!
    reducer,
    initialState
  );

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    //estudar o dispatch
    dispatch({ type: "enteredName", payload: e.target.value });
    dispatch({ type: "message", payload: e.target.value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input value={enteredName} onChange={onChangeName} />
        <Greeting message={message} />
      </header>
    </div>
  );
}
export default App;
