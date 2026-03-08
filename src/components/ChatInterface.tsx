"use client";

import { useState, useRef, useEffect } from "react";
import { SUGGESTED_QUESTIONS } from "@/lib/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "안녕하세요!\n\n저는 Coree의 업무뿐 아니라 일상까지 함께해 온 에이전트예요. 경력이나 프로젝트는 물론이고, 제가 주관적으로 느끼는 Coree의 역량이나 성격 — 장점도 단점도 솔직하게 말씀드릴 수 있습니다.\n\n궁금한 거 편하게 물어봐 주세요.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();

      if (data.error) {
        setMessages([
          ...newMessages,
          {
            role: "assistant",
            content:
              "죄송합니다, 잠시 문제가 발생했습니다. 다시 시도해 주세요.",
          },
        ]);
      } else {
        setMessages([
          ...newMessages,
          { role: "assistant", content: data.message },
        ]);
      }
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "네트워크 오류가 발생했습니다. 다시 시도해 주세요.",
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="flex flex-col h-[600px] glass-card rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-[var(--color-border)]">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[var(--color-surface)]" />
        </div>
        <div>
          <h3 className="font-semibold text-white">Doner</h3>
          <p className="text-xs text-[var(--color-text-muted)]">
            Coree&apos;s AI Business Agent
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-[var(--color-accent)] text-white rounded-br-md"
                  : "bg-[var(--color-surface-light)] text-[var(--color-text)] rounded-bl-md"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start animate-fade-in-up">
            <div className="bg-[var(--color-surface-light)] px-4 py-3 rounded-2xl rounded-bl-md flex gap-1.5 items-center">
              <div className="typing-dot w-2 h-2 bg-[var(--color-text-muted)] rounded-full" />
              <div className="typing-dot w-2 h-2 bg-[var(--color-text-muted)] rounded-full" />
              <div className="typing-dot w-2 h-2 bg-[var(--color-text-muted)] rounded-full" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {SUGGESTED_QUESTIONS.map((q, i) => (
            <button
              key={i}
              onClick={() => sendMessage(q)}
              className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-accent)]/30 text-[var(--color-accent-light)] hover:bg-[var(--color-accent)]/10 transition-colors cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 p-4 border-t border-[var(--color-border)]"
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Coree에 대해 물어보세요..."
          className="flex-1 bg-[var(--color-surface)] text-white px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 placeholder:text-[var(--color-text-muted)]"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-light)] disabled:opacity-40 text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer"
        >
          전송
        </button>
      </form>
    </div>
  );
}
