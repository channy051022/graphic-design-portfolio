"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

type Message = {
  role: "user" | "model";
  content: string;
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hi! I'm Christian's AI assistant. Ask me anything about his work, skills, or experience!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, data]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "Oops, something went wrong. Please make sure my API key is set up correctly!" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-accent text-white rounded-full shadow-2xl hover:scale-110 hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center group"
        aria-label="Toggle Chatbot"
      >
        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20 group-hover:opacity-0" />
        {isOpen ? <X size={24} className="relative z-10" /> : <Bot size={24} className="relative z-10 animate-bounce" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-full max-w-[350px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-50 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-foreground text-background p-4 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
            <Bot size={18} />
          </div>
          <div>
            <h3 className="font-bold text-sm">Christian's Assistant</h3>
            <p className="text-xs opacity-70">Powered by Gemini AI</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-[350px] overflow-y-auto flex flex-col gap-4 bg-muted/30">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 max-w-[85%] ${
                msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                  msg.role === "user" ? "bg-foreground text-background" : "bg-accent text-white"
                }`}
              >
                {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
              </div>
              <div
                className={`p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-foreground text-background rounded-tr-sm"
                    : "bg-background border border-border text-foreground rounded-tl-sm shadow-sm"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 max-w-[85%] mr-auto">
              <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shrink-0 mt-1">
                <Bot size={12} />
              </div>
              <div className="p-3 rounded-2xl bg-background border border-border text-foreground rounded-tl-sm shadow-sm flex items-center gap-2">
                <Loader2 size={14} className="animate-spin text-accent" />
                <span className="text-xs text-muted-foreground">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-background border-t border-border flex items-center gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 max-h-32 min-h-[44px] bg-muted/50 border-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none placeholder:text-muted-foreground/70"
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-white transition-colors"
          >
            <Send size={18} className="ml-1" />
          </button>
        </div>
      </div>
    </>
  );
}
