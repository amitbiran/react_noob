import { useReducer } from "react";
import "./styles.css";

export default function App() {
  const [checked, toggle] = useReducer((checked) => !checked, false);
  //reducer handles changes in the state, its a function that gets a state and return a diffenet state

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}
