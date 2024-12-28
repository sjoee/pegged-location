// pages/function.tsx
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function FunctionPage() {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    // Handle the submission here
    alert(`Input Submitted: ${input}`);
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 ml-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
