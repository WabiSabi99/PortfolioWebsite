// ChatMessage.tsx
// Renders a single chat message, formatting bot/user messages and supporting Markdown (with custom link/list rendering).

import { cn } from "@/lib/utils";
import { Message } from "ai";
import { Bot } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({
  message: { role, content },
}: ChatMessageProps) {
  const isBot = role === "assistant"; // Check if message is from bot

  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isBot ? "justify-start" : "justify-end", // Align left for bot, right for user
      )}
    >
      {isBot && <Bot className="mr-2" />} {/* Show bot icon for assistant */}
      <div
        className={cn(
          "rounded border px-3 py-2 max-w-64",
          isBot ? "bg-background" : "bg-foreground text-background", // Different background for bot/user
        )}
      >
        <Markdown
          components={{
            a: ({ node, href, ...props }) => (
              <Link
                href={href ?? ""}
                className="underline underline-offset-2"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p className="mt-3 first:mt-0" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="mt-3 list-inside list-disc first:mt-0"
                {...props}
              />
            ),
          }}
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
}
