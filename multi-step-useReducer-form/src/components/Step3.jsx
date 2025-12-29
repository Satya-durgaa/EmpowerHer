function Step3({ state, dispatch }) {
  const { formData } = state;

  return (
    <>
      <h4>Review Details</h4>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Username: {formData.username}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>Submit</button>
      &nbsp;
      <button onClick={() => dispatch({ type: "RESET_FORM" })}>Reset</button>
    </>
  );
}

export default Step3;