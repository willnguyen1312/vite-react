import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { proxy, useSnapshot } from "valtio";

const state = proxy({
  count: 4,
  voila: 20,
});
const incDur = () => {
  ++state.count;
};
const decDur = () => {
  --state.count;
};

function First() {
  const snap = useSnapshot(state);
  console.log("First rendered")

  return (
    <div>
      <h3>{snap.count}</h3>
      <button disabled={snap.count <= 1} onClick={decDur}>
        -
      </button>
      <button disabled={snap.count >= 10} onClick={incDur}>
        +
      </button>
    </div>
  );
}

function App() {
  const snap = useSnapshot(state);
  console.log("App rendered")

  return (
    <>
      <First />
      Voila: {snap.voila}
    </>
  );
}

export default App;
