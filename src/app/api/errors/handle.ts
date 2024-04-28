const errors: Record<string, string> = {
  'YoutubeTranscriptDisabledError': 'Transcript is disabled on this video',
}

export function YoutubeTranscriptError(message: string) {
  if (message.includes('Transcript is disabled on this video')) {
    return errors['YoutubeTranscriptDisabledError'];
  }

  const error = errors[message] ?? 'Sorry, an error occurred';
  return error;
}
