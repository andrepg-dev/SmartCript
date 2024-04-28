'use client'

import { isAcceptedFileType } from "@/services/files/file_type";
import { ExtractText } from "@/services/files/extract_text";
import { FormDataFile } from "@/utils/extract_form_data";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const file = FormDataFile(e);
    if (!file) return setText("No file selected");

    // Is file is not accepted, return 
    if (!isAcceptedFileType(file)) return setText("File type not accepted");

    // Extract text from file
    ExtractText(file, setText);
  }

  return (
    <main className="h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-red-50 max-w-sm mx-auto mt-32">
        <input type="file" name="file" id="file" accept=".pdf, .doc, .docx, .txt" />
        <button type="submit" className="rounded bg-black text-white p-2 mx-4">Send file</button>
      </form>

      <p className="max-w-[70ch] mt-8 mx-auto" style={{ wordBreak: 'break-word', overflow: 'clip' }}>
        {text}
      </p>
    </main>
  );
}
