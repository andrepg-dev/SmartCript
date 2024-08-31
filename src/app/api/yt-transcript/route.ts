import { TranscriptResponse, YoutubeTranscript } from 'youtube-transcript';
import { YoutubeTranscriptError } from '../errors/handle';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return Response.json({ error: 'Query videoId is required' }, { status: 400 });
  }

  const res: TranscriptResponse[] | string =
    await YoutubeTranscript.fetchTranscript(videoId).catch((err) => {
      return YoutubeTranscriptError(err.message);
    });

  if (!res.length || res === 'Transcript is disabled on this video') {
    return Response.json({ error: 'No transcript found for this video', videoId }, { status: 404 })
  };

  return Response.json({
    transcription: res,
  });
}
