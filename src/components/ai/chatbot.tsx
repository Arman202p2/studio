'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { handleChatbotQuery } from '@/app/actions';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const result = await handleChatbotQuery(input);
    
    let assistantMessage: Message;
    if (result.response) {
      assistantMessage = { role: 'assistant', content: result.response };
    } else {
      assistantMessage = { role: 'assistant', content: result.error || 'An unknown error occurred.' };
    }
    
    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          size="icon"
        >
          <Bot className="h-8 w-8 text-primary-foreground" />
          <span className="sr-only">Open Chatbot</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col p-0">
        <SheetHeader className="p-6 pb-4">
          <SheetTitle className="font-headline flex items-center gap-2"><Bot/> AI Assistant</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 px-6" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3",
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={20} /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "max-w-xs rounded-lg px-4 py-2",
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                {message.role === 'user' && (
                   <Avatar className="h-8 w-8">
                    <AvatarFallback><User size={20} /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
             {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground"><Bot size={20} /></AvatarFallback>
                </Avatar>
                <div className="bg-muted text-muted-foreground rounded-lg px-4 py-2 flex items-center">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}
            {messages.length === 0 && (
                <div className="text-center text-sm text-muted-foreground pt-10">
                    <p>Welcome to FlexAI Gym! How can I help you today?</p>
                </div>
            )}
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about memberships, classes..."
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
