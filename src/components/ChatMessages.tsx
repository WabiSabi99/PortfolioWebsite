// ChatMessages.tsx
// Displays the list of chat messages in the chatbot, handles empty/loading/error states, and auto-scrolls to latest message.

import { Message } from "ai";
import { Bot, Loader2 } from "lucide-react";
import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

interface ChatMessagesProps {
  messages: Message[];
  error: Error | undefined;
  isLoading: boolean;
}

export default function ChatMessages({
  messages,
  error,
  isLoading,
}: ChatMessagesProps) {
  const isLastMessageUser = messages[messages.length - 1]?.role === "user"; // Check if last message is from user

  // Scroll to new messages automatically
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight; // Scroll to bottom on new message
    }
  }, [messages]);

  return (
    <div className="h-full overflow-y-auto p-3" ref={scrollRef}>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <ChatMessage message={msg} /> {/* Render each chat message */}
          </li>
        ))}
      </ul>

      {/* empty */}
      {!error && messages.length === 0 && (
        <div className="flex h-full flex-col items-center justify-center mt-16 gap-2">
          <Bot /> {/* Bot icon for empty state */}
          <p className="font-medium">Send a message to start the chat!</p>
          <p className="text-center text-xs text-muted-foreground">
            You can ask the bot anything about me and it will help to find the
            relevant information!
          </p>
        </div>
      )}

      {/* loading */}
      {isLoading && isLastMessageUser && (
        <div className="flex items-center justify-center">
          <Loader2 className="mr-1.5 size-3 animate-spin text-muted-foreground" /> {/* Loading spinner */}
          <p className="text-center text-xs text-muted-foreground">
            Thinking...
          </p>
        </div>
      )}

      {/* error */}
      {error && (
        <p className="text-center text-xs text-rose-500">
          Something went wrong. Please try again!
        </p>
      )}
    </div>
  );
}
