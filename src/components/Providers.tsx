// Providers.tsx
// Wraps the app with ThemeProvider, ChatProvider, and Toaster for global state and UI context.

"use client";

import { ChatProvider } from "@/contexts/ChatContext";
import { ThemeProvider, useTheme } from "next-themes";
import React from "react";
import { Toaster } from "sonner";
import Chat from "./Chat";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem // Enable system theme detection
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <ChatProvider>
        {children} {/* Render all app children */}
        <Chat />   {/* Floating chatbot widget */}
      </ChatProvider>
      <ToastProvider /> {/* Toast notifications */}
    </ThemeProvider>
  );
}

// Provides toast notifications with theme awareness
function ToastProvider() {
  const { resolvedTheme } = useTheme(); // Get current theme

  return (
    <Toaster
      className="mt-12"
      position="top-right"
      theme={resolvedTheme === "dark" ? "dark" : "light"} // Match toast theme to app theme
    />
  );
}
