import { useState } from "react";
import { add } from "../utils/stringCalculator";
import "./Calculator.css"; // Import CSS for styling

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    try {
      const sanitizedInput = input.replace(/\\n/g, "\n");
      setResult(add(sanitizedInput));
      setError(null);
    } catch (error) {
      setError(error.message);
      setResult(null);
    }
  }

  return (
    <div className="calculator-container">
      <form className="calculator-form" onSubmit={handleSubmit}>
        <h1>String Calculator</h1>
        <input
          type="text"
          placeholder="Enter numbers (e.g., 1,2 or 1\n2)"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Calculate</button>
        {error && <p className="error-message">{error}</p>}
        {result !== null && <p className="result-message">Result: {result}</p>}
      </form>
    </div>
  );
}