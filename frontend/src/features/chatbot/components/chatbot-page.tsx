import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardNavbar from "@/features/dashboard/components/dashboard-navbar";
import {
  getChatSessions,
  getSessionMessages,
  sendChatMessage,
  createChatSession,
  deleteChatSession,
} from "@/services/api";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

interface Session {
  id: string;
  title: string;
  messageCount: number;
  lastMessageAt: string;
  createdAt: string;
}

interface FileAttachment {
  file: File;
  base64: string;
  preview: string;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } } };

export default function ChatbotPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [loadingSessions, setLoadingSessions] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);
  const [attachment, setAttachment] = useState<FileAttachment | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { loadSessions(); }, []);
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (attachment && activeSessionId && inputRef.current) inputRef.current.focus(); }, [attachment, activeSessionId]);

  async function loadSessions() {
    setLoadingSessions(true);
    try { const data = await getChatSessions(); setSessions(data.sessions || []); }
    catch { console.error("Failed to load sessions"); }
    finally { setLoadingSessions(false); }
  }

  async function loadMessages(sessionId: string) {
    setActiveSessionId(sessionId);
    try { const data = await getSessionMessages(sessionId); setMessages(data.messages || []); }
    catch { console.error("Failed to load messages"); }
    if (window.innerWidth < 768) setShowSidebar(false);
  }

  async function handleNewSession() {
    try {
      const session = await createChatSession();
      setSessions(prev => [{ id: session.id, title: session.title, messageCount: 0, lastMessageAt: session.createdAt, createdAt: session.createdAt }, ...prev]);
      setActiveSessionId(session.id);
      setMessages([]);
      inputRef.current?.focus();
    } catch { console.error("Failed to create session"); }
    if (window.innerWidth < 768) setShowSidebar(false);
  }

  async function handleDeleteSession(e: React.MouseEvent, sessionId: string) {
    e.stopPropagation();
    try {
      await deleteChatSession(sessionId);
      setSessions(prev => prev.filter(s => s.id !== sessionId));
      if (activeSessionId === sessionId) { setActiveSessionId(null); setMessages([]); }
    } catch { console.error("Failed to delete session"); }
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 15 * 1024 * 1024) { alert("File size must be under 15MB"); e.target.value = ""; return; }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setAttachment({ file, base64: result, preview: file.type.startsWith("image/") ? result : "" });
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }

  function removeAttachment() { setAttachment(null); }

  async function handleSend() {
    const text = input.trim();
    if ((!text && !attachment) || !activeSessionId || sending) return;
    const contentToSend = text || (attachment ? `Here is a file: ${attachment.file.name}` : "");
    const fileData = attachment ? { base64: attachment.base64, mimeType: attachment.file.type, fileName: attachment.file.name } : null;
    setInput("");
    setAttachment(null);
    setSending(true);
    const tempId = `temp-${Date.now()}`;
    const displayContent = fileData ? `${contentToSend}\n\n[Attached: ${fileData.fileName}]` : contentToSend;
    const userMsg: Message = { id: tempId, role: "user", content: displayContent, createdAt: new Date().toISOString() };
    setMessages(prev => [...prev, userMsg]);
    try {
      const result = await sendChatMessage(activeSessionId, contentToSend, fileData);
      setMessages(prev => prev.map(m => (m.id === tempId ? result.message : m)).concat(result.reply));
      setSessions(prev => prev.map(s => s.id === activeSessionId ? { ...s, messageCount: s.messageCount + 2, lastMessageAt: result.reply.createdAt } : s));
    } catch {
      setMessages(prev => prev.concat({ id: `err-${Date.now()}`, role: "assistant", content: "Sorry, I'm having trouble responding right now. Please try again.", createdAt: new Date().toISOString() }));
    } finally { setSending(false); }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getFileIcon = (mime: string) => {
    if (mime.includes("pdf")) return "📄";
    if (mime.includes("image")) return "🖼️";
    if (mime.includes("text") || mime.includes("json")) return "📝";
    return "📎";
  };

  const SUGGESTIONS = [
    { text: "What skills should I learn next?", icon: "🎯", desc: "Skill recommendations" },
    { text: "How do I prepare for technical interviews?", icon: "🎤", desc: "Interview tips" },
    { text: "Create a study plan for me", icon: "📋", desc: "Personalized plan" },
    { text: "Review my career progress", icon: "📈", desc: "Progress analysis" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0D1E] via-[#110F2A] to-[#1A0F2E] flex flex-col relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-transparent blur-[120px]" />
        <motion.div animate={{ x: [0, -40, 50, 0], y: [0, 50, -30, 0] }} transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-transparent blur-[120px]" />
        <motion.div animate={{ x: [0, 30, -40, 0], y: [0, 30, -20, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-pink-500/10 to-transparent blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <svg className="fixed inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs><pattern id="chatGrid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs>
        <rect width="100%" height="100%" fill="url(#chatGrid)" />
      </svg>

      <DashboardNavbar />

      <div className="flex-1 flex overflow-hidden relative z-10" style={{ height: "calc(100vh - 73px)" }}>
        {/* Sidebar */}
        <AnimatePresence>
          {showSidebar && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 300, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className="bg-white/5 backdrop-blur-xl border-r border-white/10 flex-shrink-0 overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-white/10">
                <button onClick={handleNewSession} className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] transition text-sm">
                  + New Chat
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
                {loadingSessions ? (
                  <div className="flex items-center justify-center gap-2 py-8">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="w-2 h-2 rounded-full bg-purple-400" style={{ animationDelay: "0.2s" }} />
                      <span className="w-2 h-2 rounded-full bg-pink-400" style={{ animationDelay: "0.4s" }} />
                    </motion.div>
                  </div>
                ) : sessions.length === 0 ? (
                  <div className="text-center text-white/30 py-8 text-sm">No conversations yet</div>
                ) : (
                  sessions.map((session) => (
                    <button
                      key={session.id}
                      onClick={() => loadMessages(session.id)}
                      className={`w-full text-left px-4 py-3 rounded-2xl transition flex items-start justify-between gap-2 group ${
                        activeSessionId === session.id
                          ? "bg-gradient-to-r from-violet-600/20 to-purple-600/10 border border-violet-500/20"
                          : "hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className={`font-semibold text-sm truncate ${activeSessionId === session.id ? "text-white" : "text-white/70 group-hover:text-white"}`}>{session.title}</p>
                        <p className={`text-xs mt-0.5 ${activeSessionId === session.id ? "text-white/40" : "text-white/30"}`}>{session.messageCount} messages</p>
                      </div>
                      <button onClick={(e) => handleDeleteSession(e, session.id)} className="p-1 rounded-full opacity-0 group-hover:opacity-100 hover:bg-white/10 shrink-0 text-white/30 hover:text-red-400 transition" title="Delete">✕</button>
                    </button>
                  ))
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <div className="flex items-center gap-3 px-6 py-3 border-b border-white/10 bg-white/[0.02] backdrop-blur-sm">
            <button onClick={() => setShowSidebar(!showSidebar)} className="p-2 hover:bg-white/10 rounded-xl transition">
              <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-sm shadow-lg">🤖</div>
              <div>
                <h1 className="text-sm font-bold text-white">
                  {activeSessionId ? sessions.find(s => s.id === activeSessionId)?.title || "Chat" : "AI Career Coach"}
                </h1>
                <p className="text-[10px] text-white/30">Powered by AI · Career Intelligence</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-4">
            {!activeSessionId ? (
              <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center justify-center h-full text-center">
                {/* Animated AI brain illustration */}
                <motion.div className="relative mb-8" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-violet-600/30 via-purple-600/20 to-pink-600/30 border border-violet-400/20 flex items-center justify-center text-4xl backdrop-blur-sm shadow-2xl shadow-violet-500/10">
                    <motion.span animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>🧠</motion.span>
                  </div>
                  {/* Glow ring */}
                  <motion.div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-violet-500/10 to-purple-500/10 blur-xl" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                  {/* Orbiting dots */}
                  <motion.div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-violet-400" animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
                  <motion.div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-purple-400" animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />
                  <motion.div className="absolute top-1/2 -right-2 w-1.5 h-1.5 rounded-full bg-pink-400" animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                </motion.div>

                <motion.h2 variants={item} className="text-2xl font-black text-white mb-2 tracking-tight">AI Career Coach</motion.h2>
                <motion.p variants={item} className="text-white/40 max-w-md mb-8 text-sm leading-relaxed">
                  Your personal career guide. Ask for advice on skill gaps, interview prep, learning paths, and more.
                </motion.p>

                {/* Suggestion cards */}
                <motion.div variants={item} className="grid sm:grid-cols-2 gap-3 max-w-lg w-full">
                  {SUGGESTIONS.map((suggestion) => (
                    <motion.button
                      key={suggestion.text}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => { handleNewSession().then(() => { setTimeout(() => { setInput(suggestion.text); inputRef.current?.focus(); }, 300); }); }}
                      className="group text-left px-4 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-violet-400/30 hover:bg-white/[0.08] transition text-sm text-white/60 hover:text-white shadow-lg"
                    >
                      <span className="text-xl mb-2 block">{suggestion.icon}</span>
                      <p className="font-semibold text-sm leading-snug">{suggestion.text}</p>
                      <p className="text-[10px] text-white/30 mt-1">{suggestion.desc}</p>
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            ) : messages.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center h-full">
                <div className="text-center max-w-md">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 border border-violet-400/20 flex items-center justify-center text-2xl mx-auto mb-4">💬</div>
                  <p className="text-white/30 text-sm">Send a message below to start your conversation.</p>
                </div>
              </motion.div>
            ) : (
              messages.map((msg) => (
                <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] md:max-w-[70%] rounded-3xl px-5 py-3.5 ${
                    msg.role === "user"
                      ? "bg-gradient-to-br from-violet-600 to-purple-700 text-white rounded-br-lg shadow-lg shadow-violet-500/15"
                      : "bg-white/5 backdrop-blur-sm border border-white/10 rounded-bl-lg text-white/80"
                  }`}>
                    <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.role === "assistant" ? renderMarkdown(msg.content) : msg.content}</div>
                    <p className={`text-xs mt-2 ${msg.role === "user" ? "text-white/40" : "text-white/20"}`}>{formatTime(msg.createdAt)}</p>
                  </div>
                </motion.div>
              ))
            )}

            {sending && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl rounded-bl-lg px-5 py-4">
                  <div className="flex gap-1.5">
                    <motion.span className="w-2 h-2 rounded-full bg-violet-400" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.span className="w-2 h-2 rounded-full bg-purple-400" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }} />
                    <motion.span className="w-2 h-2 rounded-full bg-pink-400" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }} />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-white/10 bg-white/[0.02] backdrop-blur-sm px-4 md:px-8 py-4">
            <div className="max-w-4xl mx-auto">
              {attachment && (
                <div className="mb-3 flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-2xl">
                  <span className="text-lg">{getFileIcon(attachment.file.type)}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white/70 truncate">{attachment.file.name}</p>
                    <p className="text-xs text-white/30">{(attachment.file.size / 1024).toFixed(1)} KB</p>
                  </div>
                  {attachment.preview && <img src={attachment.preview} alt="Preview" className="w-10 h-10 rounded-lg object-cover" />}
                  <button onClick={removeAttachment} className="p-1 hover:bg-white/10 rounded-full text-white/30 hover:text-red-400 transition">✕</button>
                </div>
              )}

              <div className="flex items-end gap-3">
                <button onClick={() => fileInputRef.current?.click()} disabled={!activeSessionId || sending}
                  className="p-3 bg-white/5 border border-white/10 text-white/40 rounded-2xl hover:bg-white/10 hover:text-white/70 transition disabled:opacity-30 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <input ref={fileInputRef} type="file" accept=".pdf,.txt,.json,.md,.csv,.png,.jpg,.jpeg,.gif" onChange={handleFileSelect} className="hidden" />

                <div className="flex-1 relative">
                  <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown}
                    placeholder={!activeSessionId ? "Create a new chat to begin..." : "Ask your career coach anything..."}
                    disabled={!activeSessionId || sending}
                    className="w-full px-5 py-3.5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10 outline-none text-sm text-white placeholder:text-white/20 transition disabled:opacity-50"
                  />
                </div>

                <button onClick={handleSend} disabled={!activeSessionId || (!input.trim() && !attachment) || sending}
                  className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl hover:shadow-lg hover:shadow-violet-500/25 transition disabled:opacity-30 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) {
      if (inList) { elements.push(<ul key={`ul-${i}`} className="list-disc pl-5 space-y-1 my-2 text-white/60">{listItems.map((item, j) => <li key={j} className="text-sm">{item}</li>)}</ul>); listItems = []; inList = false; }
      elements.push(<h2 key={i} className="text-base font-bold text-white mt-4 mb-2">{trimmed.slice(3)}</h2>);
    } else if (trimmed.startsWith("### ")) {
      if (inList) { elements.push(<ul key={`ul-${i}`} className="list-disc pl-5 space-y-1 my-2 text-white/60">{listItems.map((item, j) => <li key={j} className="text-sm">{item}</li>)}</ul>); listItems = []; inList = false; }
      elements.push(<h3 key={i} className="text-sm font-bold text-white/80 mt-3 mb-1">{trimmed.slice(4)}</h3>);
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      inList = true;
      listItems.push(trimmed.slice(2));
    } else if (trimmed === "") {
      if (inList) { elements.push(<ul key={`ul-${i}`} className="list-disc pl-5 space-y-1 my-2 text-white/60">{listItems.map((item, j) => <li key={j} className="text-sm">{item}</li>)}</ul>); listItems = []; inList = false; }
    } else {
      if (inList) { elements.push(<ul key={`ul-${i}`} className="list-disc pl-5 space-y-1 my-2 text-white/60">{listItems.map((item, j) => <li key={j} className="text-sm">{item}</li>)}</ul>); listItems = []; inList = false; }
      elements.push(<p key={i} className="text-sm mb-1">{trimmed}</p>);
    }
  });

  if (inList) { elements.push(<ul key="ul-final" className="list-disc pl-5 space-y-1 my-2 text-white/60">{listItems.map((item, j) => <li key={j} className="text-sm">{item}</li>)}</ul>); }

  return elements.length > 0 ? <div className="space-y-1">{elements}</div> : <p>{text}</p>;
}
