function Step1({ state, dispatch }) {
  const { name, email } = state.formData;

  return (
    <>
      <input placeholder="Name" value={name}
        onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })} />
      <br /><br />

      <input placeholder="Email" value={email}
        onChange={(e) => dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })} />
      <br /><br />

      <button disabled={!name || !email}
        onClick={() => dispatch({ type: "NEXT_STEP" })}>
        Next
      </button>
    </>
  );
}

export default Step1;