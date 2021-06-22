import { useState, useEffect } from "react";
import "./styles.css";

export default function App({ authorized }) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`it's ${emotion} around here`);
  }, [emotion]);

  useEffect(() => {
    console.log(`it's ${secondary} around here`);
  }, [secondary]);

  return (
    <>
      <h1>
        Current emotion is {emotion} and {secondary}.
      </h1>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("intusiastic")}>Intus</button>
      <button onClick={() => setEmotion("happy")}>Make Happy</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
    </>
  );
}
