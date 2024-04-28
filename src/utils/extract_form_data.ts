export function FormDataFile(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData();
  const file = (e.target as HTMLFormElement).file.files[0];
  formData.append('file', file);

  return file;
}