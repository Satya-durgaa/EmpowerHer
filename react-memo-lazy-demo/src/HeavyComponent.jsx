import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ marginTop: "20px", padding: "15px", border: "1px solid gray" }}>
      <h3>Heavy Component</h3>
      <p>This component renders only once.</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
