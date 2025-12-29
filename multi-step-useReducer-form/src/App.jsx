import { useReducer } from "react";
import { formReducer, initialState } from "./reducer";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Multi-Step Registration Form</h2>
      <p>Step {state.step} / 3</p>

      {state.step === 1 && <Step1 state={state} dispatch={dispatch} />}
      {state.step === 2 && <Step2 state={state} dispatch={dispatch} />}
      {state.step === 3 && <Step3 state={state} dispatch={dispatch} />}

      {state.isSubmitted && <h3 style={{ color: "green" }}>Form Submitted Successfully</h3>}
    </div>
  );
}

export default App;