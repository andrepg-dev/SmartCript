'use client';

import { useChat } from 'ai/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, User, Bot } from 'lucide-react';

interface AIChatProps {
  context: string;
}

export default function AIChat({ context }: AIChatProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    body: { context },
  });

  return (
    <div className="mt-8 border rounded-xl overflow-hidden bg-card flex flex-col h-[500px]">
      <div className="p-4 border-b bg-muted/50">
        <h3 className="text-lg font-bold">Chatear con la IA</h3>
        <p className="text-xs text-muted-foreground">Pregunta cualquier cosa sobre tu documento o video.</p>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-8 text-muted-foreground italic">
              Empieza preguntando: &quot;¿De qué trata este contenido?&quot;
            </div>
          )}
          {messages.map(m => (
            <div key={m.id} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-[80%] p-3 rounded-lg ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                {m.role === 'assistant' ? <Bot className="size-5 shrink-0" /> : <User className="size-5 shrink-0" />}
                <p className="text-sm">{m.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
        <Input
          value={input}
          placeholder="Haz una pregunta..."
          onChange={handleInputChange}
          disabled={isLoading || !context}
        />
        <Button type="submit" disabled={isLoading || !context}>
          <Send className="size-4" />
        </Button>
      </form>
    </div>
  );
}
