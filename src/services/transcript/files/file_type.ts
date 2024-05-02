enum AcceptedTypes {
  PDF = 'application/pdf',
  DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  TXT = 'text/plain',
}

export function isAcceptedFileType(file: File): Boolean {
  return Object.values(AcceptedTypes).includes(file.type as AcceptedTypes);
}

export function FileType(file: File) {
  switch (file.type) {
    case AcceptedTypes.PDF:
      return 'PDF';
    case AcceptedTypes.DOCX:
      return 'DOCX';
    case AcceptedTypes.TXT:
      return 'TXT';
    default:
      return 'Unknown';
  }
}
