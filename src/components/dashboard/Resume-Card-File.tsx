'use client'
import { Button } from "@/components/ui/button"
import { CloudUpload, FileText } from "lucide-react"

import { cn } from "@/lib/utils"
import { useState } from "react"
import { Accept, useDropzone } from 'react-dropzone'
import { ExtractText } from "@/services/transcript/files/extract_text"

interface ResumeCardFileProps {
  title: string
  description: string
  type: 'PDF' | 'Word' | 'TXT'
  accept: Accept,
}

export default function ResumeCardFile({ accept, title, description, type }: ResumeCardFileProps) {
  const [file, setFile] = useState<File | null>(null)

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: accept,
    multiple: false,
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setFile(file);

        ExtractText(file, (text) => console.log({ text }));

      }
    },
  });

  return (
    <div
      {...getRootProps({ className: 'dropzone' })}
      className={cn(
        'border p-6 rounded-md transition duration-150 relative overflow-hidden hover:border-foreground/30 cursor-pointer bg-white dark:bg-[#0a0a0a]',
        isDragActive && 'border-purple dark:!bg-purple/5 !bg-purple/30',
        isDragReject && 'border-red-500 dark:!bg-red-500/5 !bg-red-500/30',
        file && 'border-foreground/70 dark:bg-purple/5 bg-purple/25'
      )}
    >

      <header className="flex items-center gap-2">
        <div className="rounded-full p-[5px] bg-muted/30 size-9 flex items-center justify-center">
          <FileText className="size-9" strokeWidth={1} />
        </div>
        <h4 className="text-xl font-medium">{title}</h4>
      </header>
      <p className={cn('mt-2 text-muted-foreground font-light', file && 'text-foreground')}>
        {description}
      </p>

      <div className="mt-4">
        <div className={cn(
          'bg-muted/10 rounded-md border-2 border-dashed p-3 text-sm flex items-center justify-center',
          isDragActive && 'border-purple',
          isDragReject && 'border-red-500',
          file && 'border-foreground/70'
        )}>
          <input {...getInputProps()} onChange={(e) => console.log(e)} />
          {!file && (
            <>
              <CloudUpload className="size-6" strokeWidth={1} />
              {!isDragReject ?
                (<span className="ml-2 font-light">
                  Haga clic para cargar el archivo {type} <span className="text-muted-foreground">o arrastre y suelte</span>
                </span>) : (
                  <span className="ml-2">
                    Debe de arrastrar un archivo {type}
                  </span>
                )}
            </>
          )}

          {file && <p>{file.name}</p>}
        </div>
      </div>
      <Button
        onClick={(e) => {
          e.stopPropagation()

        }}
        className="mt-4"
        disabled={isDragReject}
        variant={file ? 'default' : 'secondary'}>
        Resumir
      </Button>
    </div>
  )
}
