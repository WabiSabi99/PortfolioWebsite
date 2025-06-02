// ThemeToggle.tsx
// Provides a button to toggle between light and dark themes using next-themes.

"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme(); // Theme context
  const [mounted, setMounted] = useState(false); // Track if mounted (for SSR)

  useEffect(() => {
    setMounted(true); // Set mounted after first render
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark"); // Toggle theme
      }}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="size-4 text-orange-300" /> // Sun icon for dark mode
      ) : (
        <MoonIcon className="size-4 text-indigo-500" /> // Moon icon for light mode
      )}
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
}
