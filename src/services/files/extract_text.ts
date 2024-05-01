import { FileType } from './file_type';
import { pdfToText } from './pdfs/pdf_to_text';
import { TextToText } from './text/text_to_text';
import { wordToText } from './word/word_to_text';

export async function ExtractText(
  file: File,
  callback: (text: string) => void,
) {
  // If file is a PDF, extract text
  if (FileType(file) === 'PDF') {
    const text_extracted = await pdfToText(file);
    if (!text_extracted) return;
    callback(text_extracted);
  }

  // If file is a DOC, extract text
  if (FileType(file) === 'DOCX') {
    const text_extracted = await wordToText(file);
    if (!text_extracted) return;
    callback(text_extracted);
  }

  // If file is a TXT, extract text
  if (FileType(file) === 'TXT') {
    const text_extracted = await TextToText(file);
    if (!text_extracted) return;
    callback(text_extracted);
  }
}
