'use client'

import mammoth from 'mammoth'

export async function wordToText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();

      reader.onload = async () => {
        const arrayBuffer = reader.result as ArrayBuffer;

        try {
          const result = await mammoth.extractRawText({ arrayBuffer });
          resolve(result.value);
        } catch (error: any) {
          console.error("Error extracting text from DOC/DOCX:", error);
          reject(error);
        }
      };

      reader.readAsArrayBuffer(file);
    }
    return "wait a moment..."
  })
}
