'use client'

import { FileType, isAcceptedFileType } from "@/services/files/file_type";
import { pdfToText } from "@/services/files/pdfs/pdf_to_text";
import { FormDataFile } from "@/utils/extract_form_data";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const file = FormDataFile(e);

    // Is file is not accepted, return 
    if (!isAcceptedFileType(file)) return

    // If file is a PDF, extract text
    if (FileType(file) === 'PDF') {
      const text_extracted = await pdfToText(file)
      if (!text_extracted) return
      setText(text_extracted);
    }
  }

  return (
    <main className="h-screen">
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 bg-red-50 max-w-sm mx-auto mt-32">
        <input type="file" name="file" id="file" accept=".pdf, .doc, .docx, .txt" />
        <button type="submit" className="rounded bg-black text-white p-2 mx-4">Send file</button>
      </form>

      <p className="max-w-[70ch] mt-20 mx-auto">
        {text}
      </p>
    </main>
  );
}
