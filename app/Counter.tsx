"use client";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>現在のカウント: {count}</p>
      <button
        onClick={incrementCount}
        style={{
          padding: "8px 16px",
          backgroundColor: "blue",
          color: "white",
          cursor: "pointer",
          border: "none",
          borderRadius: "4px",
        }}
      >
        カウントを増やす
      </button>
    </div>
  );
}
