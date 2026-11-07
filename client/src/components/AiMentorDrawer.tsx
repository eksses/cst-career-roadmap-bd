import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { useStudent } from '../context/StudentContext.js';
import { X, MessageSquare, Send, Sparkles, User, Bot, Loader2, KeyRound } from 'lucide-react';

interface AiMentorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const AiMentorDrawer: React.FC<AiMentorDrawerProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const { saveCode, primaryTrack, profile } = useStudent();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize initial greeting if empty
  useEffect(() => {
    if (messages.length === 0) {
      const greeting = language === 'bn'
        ? `আসসালামু আলাইকুম। আমি তোমার সিএসটি ক্যারিয়ার মেন্টর। তোমার ডিভাইস, পলিটেকনিক ল্যাব বা ${primaryTrack?.title_bn || 'ক্যারিয়ার ট্র্যাক'} নিয়ে যেকোনো প্রশ্ন থাকলে নিঃসঙ্কোচে জানাও। নিচে দেওয়া বাটনগুলোতে ট্যাপ করেও প্রশ্ন করতে পারো।`
        : `Hello. I am your CST Career Mentor. Feel free to ask any question regarding your polytechnic labs, device limitations, or your roadmap for ${primaryTrack?.title_en || 'your matched track'}. You can also tap any suggested question below.`;
      setMessages([{ role: 'assistant', content: greeting }]);
    }
  }, [language, primaryTrack]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isSending) return;

    const userMsg: ChatMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsSending(true);

    try {
      const res = await fetch('/api/mentor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          saveCode: saveCode || undefined,
        }),
      });
      const data = await res.json();
      if (data.success && data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages(prev => [
          ...prev,
          {
            role: 'assistant',
            content: language === 'bn'
              ? 'দুঃখিত, এই মুহূর্তে উত্তর দিতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করো।'
              : 'Sorry, I encountered an issue generating a response. Please try again.',
          },
        ]);
      }
    } catch (err) {
      console.error('Mentor chat error:', err);
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: language === 'bn'
            ? 'সার্ভারের সাথে সংযোগে সমস্যা হচ্ছে। একটু পর আবার চেষ্টা করো।'
            : 'Could not connect to the mentor server. Please try again in a moment.',
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs">
      <div className="bg-[#FFFFFF] w-full max-w-lg h-full shadow-2xl flex flex-col border-l border-[#E5E4DF] animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#E5E4DF] flex items-center justify-between bg-[#FAF9F5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B4332] text-white flex items-center justify-center">
              <MessageSquare className="w-5 h-5 stroke-[1.75]" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#141413]">
                {t.mentor.title}
              </h3>
              <p className="text-[11px] text-[#575653] line-clamp-1">
                {primaryTrack ? (language === 'bn' ? primaryTrack.title_bn : primaryTrack.title_en) : t.mentor.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#E5E4DF] hover:bg-[#F7F6F2] flex items-center justify-center text-[#575653] transition-colors"
          >
            <X className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          
          {messages.map((msg, idx) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={idx}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-7 h-7 rounded-lg bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4 stroke-[2]" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                    isUser
                      ? 'bg-[#141413] text-white rounded-tr-xs'
                      : 'bg-[#F7F6F2] text-[#141413] border border-[#E5E4DF] rounded-tl-xs'
                  }`}
                >
                  {msg.content}
                </div>

                {isUser && (
                  <div className="w-7 h-7 rounded-lg bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4 stroke-[2]" />
                  </div>
                )}
              </div>
            );
          })}

          {isSending && (
            <div className="flex items-center gap-2 text-xs text-[#575653] bg-[#F7F6F2] p-3 rounded-xl w-fit">
              <Loader2 className="w-4 h-4 stroke-[2] animate-spin text-[#C84B31]" />
              <span>{language === 'bn' ? 'মেন্টর চিন্তা করছেন...' : 'Mentor is crafting advice...'}</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 4 One-Tap Starter Prompt Chips */}
        <div className="px-4 py-2 border-t border-[#E5E4DF] bg-[#FAF9F5] overflow-x-auto">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#575653] mb-1.5">
            {language === 'bn' ? 'এক ট্যাপে প্রশ্ন করো:' : 'One-Tap Starter Questions:'}
          </p>
          <div className="flex gap-1.5 pb-1">
            {t.mentor.chips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(chip)}
                className="px-2.5 py-1.5 rounded-lg text-xs bg-[#FFFFFF] border border-[#E5E4DF] hover:border-[#C84B31] text-[#141413] whitespace-nowrap shrink-0 transition-colors cursor-pointer text-left"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-[#E5E4DF] bg-[#FFFFFF] safe-bottom">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.mentor.inputPlaceholder}
              className="flex-1 px-4 py-3 text-base sm:text-sm bg-[#F7F6F2] border border-[#E5E4DF] rounded-xl focus:outline-none focus:border-[#C84B31]"
            />
            <button
              type="submit"
              disabled={isSending || !inputText.trim()}
              className={`min-h-[44px] px-4 rounded-xl font-bold text-xs text-white flex items-center justify-center transition-all ${
                isSending || !inputText.trim()
                  ? 'bg-[#D4D3CC] cursor-not-allowed'
                  : 'bg-[#1B4332] hover:bg-[#143225] cursor-pointer shadow-xs active:scale-95'
              }`}
            >
              <Send className="w-4 h-4 stroke-[2]" />
            </button>
          </form>
          <p className="text-[10px] text-[#575653] mt-2 text-center">
            {t.mentor.disclaimer}
          </p>
        </div>

      </div>
    </div>
  );
};
