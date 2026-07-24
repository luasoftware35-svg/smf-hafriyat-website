"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bot, MessageSquareText, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { useSiteContact } from "@/components/providers/SiteContactProvider";
import { chatbotMenuPrompt, chatbotTopics, chatbotWelcome, type ChatbotAction } from "@/lib/constants/chatbot";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function SiteChatWidget() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return <SiteChatWidgetInner />;
}

function SiteChatWidgetInner() {
  const { contactInfo } = useSiteContact();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showMenu, setShowMenu] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    if (messages.length === 0) {
      setMessages([{ id: createId(), role: "bot", text: chatbotWelcome }]);
      setShowMenu(true);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" });
  }, [messages, showMenu, reduceMotion]);

  const appendMessage = (role: ChatMessage["role"], text: string) => {
    setMessages((prev) => [...prev, { id: createId(), role, text }]);
  };

  const handleTopic = (topicId: string) => {
    const topic = chatbotTopics.find((item) => item.id === topicId);
    if (!topic) return;

    appendMessage("user", topic.label);
    appendMessage("bot", topic.response);
    setShowMenu(false);
  };

  const handleReset = () => {
    setMessages([{ id: createId(), role: "bot", text: chatbotWelcome }]);
    setShowMenu(true);
  };

  const latestTopicActions = (): ChatbotAction[] => {
    const lastUser = [...messages].reverse().find((message) => message.role === "user");
    if (!lastUser) return [{ label: "İletişim formu", href: "/iletisim" }];
    const topic = chatbotTopics.find((item) => item.label === lastUser.text);
    return topic?.actions ?? [{ label: "İletişim formu", href: "/iletisim" }];
  };

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[calc(16rem+env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-50 flex w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-2xl border border-surface bg-bg-primary shadow-[0_20px_60px_rgba(0,0,0,0.22)] lg:bottom-[8.5rem] lg:w-[22rem]"
            role="dialog"
            aria-label="SMF Hafriyat sohbet asistanı"
          >
            <div className="flex items-center gap-3 border-b border-surface bg-accent-foreground px-4 py-3 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
                <Bot size={24} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-heading text-sm">{siteConfig.name}</p>
                <p className="truncate text-xs text-white/75">Sohbet asistanı · Pzt–Cmt 08:00–18:00</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/10"
                aria-label="Sohbeti kapat"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="max-h-[min(50vh,22rem)] space-y-3 overflow-y-auto bg-bg-secondary/60 px-3 py-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  <div
                    className={cn(
                      "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm",
                      message.role === "user"
                        ? "rounded-br-md bg-accent text-accent-foreground"
                        : "rounded-bl-md border border-surface bg-bg-primary text-text-primary",
                    )}
                  >
                    {message.text.split("\n").map((line, index) => (
                      <span key={`${message.id}-${index}`}>
                        {line}
                        {index < message.text.split("\n").length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {showMenu ? (
                <div className="space-y-2 pt-1">
                  <p className="px-1 text-xs font-medium text-text-secondary">{chatbotMenuPrompt}</p>
                  <div className="flex flex-wrap gap-2">
                    {chatbotTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => handleTopic(topic.id)}
                        className="rounded-full border border-surface bg-bg-primary px-3 py-2 text-xs font-semibold text-text-primary shadow-sm transition-colors hover:border-accent hover:text-accent"
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="space-y-2 border-t border-surface bg-bg-primary px-3 py-3">
              {!showMenu ? (
                <div className="flex flex-wrap gap-2">
                  {latestTopicActions().map((action) =>
                    action.whatsapp ? (
                      <a
                        key={action.label}
                        href={contactInfo.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <WhatsAppIcon size={16} className="text-white" />
                        {action.label}
                      </a>
                    ) : action.href ? (
                      <Link
                        key={action.label}
                        href={action.href}
                        className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full border border-surface bg-bg-secondary px-4 py-2 text-xs font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent"
                      >
                        {action.label}
                      </Link>
                    ) : null,
                  )}
                </div>
              ) : (
                <Link
                  href="/iletisim"
                  className="flex min-h-11 w-full items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Keşif formunu aç
                </Link>
              )}

              {!showMenu ? (
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full text-center text-xs font-medium text-text-secondary transition-colors hover:text-accent"
                >
                  Başa dön
                </button>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="fixed bottom-[calc(11.5rem+env(safe-area-inset-bottom,0px))] right-[max(1rem,env(safe-area-inset-right,0px))] z-50 pb-safe lg:bottom-[5.75rem] lg:right-5 lg:pb-0">
        <span className="absolute inset-0 rounded-full bg-accent/40 animate-ring-pulse" aria-hidden="true" />
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Sohbeti kapat" : "Sohbet asistanını aç"}
          className="relative flex h-14 w-14 min-h-11 min-w-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow transition-transform hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={reduceMotion ? false : { opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, rotate: 90 }}
              >
                <X size={24} strokeWidth={2.5} aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
              >
                <MessageSquareText size={24} aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {!open ? (
          <span className="pointer-events-none absolute -top-11 right-0 hidden items-center gap-1.5 rounded-full bg-accent-foreground px-3 py-1.5 text-xs font-semibold text-white shadow-lg lg:inline-flex">
            <Bot size={14} aria-hidden="true" />
            Sohbet
          </span>
        ) : null}
      </div>
    </>
  );
}
