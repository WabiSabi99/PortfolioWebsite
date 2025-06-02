// Chat.tsx
// Renders the floating AI chatbot widget using an accordion UI. 
// Handles chat visibility, message state, and input via useChat and useChatbot context.
// Includes ChatHeader, ChatMessages, and ChatInput components for full chat functionality.

import { useChatbot } from "@/contexts/ChatContext"; // Custom context for chatbot visibility
import { useChat } from "ai/react"; // AI chat state and handlers
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

export default function Chat() {
  const {
    messages, // Array of chat messages
    input, // Current input value
    handleInputChange, // Handler for input changes
    handleSubmit, // Handler for form submit
    setMessages, // Setter for messages array
    isLoading, // Loading state for AI response
    error, // Error state
  } = useChat();

  const { isVisible } = useChatbot(); // Whether the chatbot is open

  return (
    isVisible && ( // Only render if chatbot is visible
      <Accordion type="single" collapsible className="relative z-40 flexs">
        <AccordionItem
          value="item-1"
          className="fixed bottom-8 right-8 w-80 rounded-md border bg-background" // Floating chat window
        >
          <AccordionTrigger className="border-b px-6">
            <ChatHeader /> {/* Chatbot header */}
          </AccordionTrigger>
          <AccordionContent className="flex max-h-96 min-h-80 flex-col justify-between p-0">
            <ChatMessages
              messages={messages}
              error={error}
              isLoading={isLoading}
            />
            <ChatInput
              input={input}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              setMessages={setMessages}
              isLoading={isLoading}
              messages={messages}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  );
}
