function Step2({ state, dispatch }) {
  const { username, password } = state.formData;

  return (
    <>
      <input placeholder="Username" value={username}
        onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "username", value: e.target.value })} />
      <br /><br />

      <input type="password" placeholder="Password" value={password}
        onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "password", value: e.target.value })} />
      <br /><br />

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
      &nbsp;
      <button disabled={!username || !password}
        onClick={() => dispatch({ type: "NEXT_STEP" })}>
        Next
      </button>
    </>
  );
}

export default Step2;