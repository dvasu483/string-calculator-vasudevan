import { useState } from "react";
import { add } from "../utils/stringCalculator";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    try {
      const sanitizedInput = input.replace(/\\n/g, "\n");
      setResult(add(sanitizedInput));
      debugger;
      setError(null);
    } catch (error) {
      setError(error.message);
      setResult(null);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">Calculate</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result !== null && <p>Result: {result}</p>}
    </form>
  );
}
