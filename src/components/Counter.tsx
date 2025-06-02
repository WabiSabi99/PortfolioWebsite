"use client";

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "./ui/Button";

export default function Counter() {
  const [count, setCount] = useState(0); // State for the counter value
  const increment = () => setCount(count + 1); // Increase count
  const decrement = () => setCount(count - 1); // Decrease count

  return (
    <div className="flex items-center gap-3">
      <Button size="icon" onClick={decrement}>
        <MinusIcon /> {/* Decrement button */}
      </Button>
      <p>Counter: {count}</p> {/* Display current count */}
      <Button size="icon" onClick={increment}>
        <PlusIcon /> {/* Increment button */}
      </Button>
    </div>
  );
}
