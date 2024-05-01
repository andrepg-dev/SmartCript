import { pdfjs } from 'react-pdf';

// Path to the pdf.worker.js file
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export async function pdfToText(file: File) {
  // Create a blob URL for the PDF file
  const blobUrl = URL.createObjectURL(file);

  // Load the PDF file
  const loadingTask = pdfjs.getDocument(blobUrl);

  let extractedText = '';
  let hadParsingError = false;
  try {
    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;

    // Iterate through each page and extract text
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join(' ');
      extractedText += pageText;
    }
  } catch (error) {
    hadParsingError = true;
    console.error('Error extracting text from PDF:', error);
  }

  // Clean up the blob URL
  URL.revokeObjectURL(blobUrl);

  // Free memory from loading task
  loadingTask.destroy();

  if (!hadParsingError) {
    return extractedText;
  }
}
