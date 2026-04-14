'use client';

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface SummaryResultProps {
  summary: string;
}

export default function SummaryResult({ summary }: SummaryResultProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!summary) return null;

  return (
    <div className="mt-8 p-6 bg-card border rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Resumen de IA</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="flex items-center gap-2"
        >
          {copied ? (
            <>
              <Check className="size-4 text-green-500" />
              Copiado
            </>
          ) : (
            <>
              <Copy className="size-4" />
              Copiar
            </>
          )}
        </Button>
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <p className="whitespace-pre-wrap text-foreground/80 leading-relaxed">
          {summary}
        </p>
      </div>
    </div>
  );
}
