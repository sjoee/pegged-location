// pages/function.tsx
import { useState } from "react";
import Image from "next/image";

export default function GamePage() {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    // Handle the submission here
    alert(`Input Submitted: ${input}`);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-primary">What should I eat !!!</h1>

      <div className="p-4">
        <input
          type="text"
          placeholder="Location"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-full border p-2 focus:border-primary focus:border-2 focus:outline-none"
        />
      </div>
      <div
        onClick={handleSubmit}
        className="inline-block ml-2 cursor-pointer"
        style={{
          position: "relative",
          width: 200,
          height: 200,
          objectFit: "contain",
        }}
      >
        <Image
          src="/red-button.png"
          alt="Submit"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
