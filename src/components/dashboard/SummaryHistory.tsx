'use client';

import { ScrollArea } from "@/components/ui/scroll-area";
import { History, FileText, Youtube } from "lucide-react";

interface HistoryItem {
  id: string;
  title: string;
  type: 'YouTube' | 'PDF' | 'Word' | 'TXT';
  date: string;
}

const mockHistory: HistoryItem[] = [
  { id: '1', title: 'Introducción a React 19', type: 'YouTube', date: '2024-05-10' },
  { id: '2', title: 'Plan de Negocios Q3', type: 'PDF', date: '2024-05-12' },
  { id: '3', title: 'Tutorial de Tailwind CSS', type: 'YouTube', date: '2024-05-14' },
  { id: '4', title: 'Contrato de Arrendamiento', type: 'PDF', date: '2024-05-15' },
];

export default function SummaryHistory() {
  return (
    <div className="bg-card border rounded-xl p-4 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4 border-b pb-2">
        <History className="size-5 text-primary" />
        <h3 className="font-bold">Historial Reciente</h3>
      </div>

      <ScrollArea className="flex-1">
        <div className="space-y-3">
          {mockHistory.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition">
              <div className="flex items-center gap-3">
                {item.type === 'YouTube' ? (
                  <Youtube className="size-4 text-red-500" />
                ) : (
                  <FileText className="size-4 text-blue-500" />
                )}
                <div>
                  <p className="text-sm font-medium leading-none">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
          {mockHistory.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">No hay historial aún.</p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
