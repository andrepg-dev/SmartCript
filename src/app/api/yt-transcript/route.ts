import { TranscriptResponse, YoutubeTranscript } from 'youtube-transcript';
import { YoutubeTranscriptError } from '../errors/handle';
import getVideoId from 'get-video-id';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url_query = searchParams.get('url');

  if (!url_query) {
    return Response.json({ error: 'Query URL is required' }, { status: 400 });
  }

  const videoId = getVideoId(url_query).id;

  if (!videoId) return Response.json({ error: 'Invalid URL' }, { status: 400 });

  const res: TranscriptResponse[] | string =
    await YoutubeTranscript.fetchTranscript(videoId).catch((err) => {
      return YoutubeTranscriptError(err.message);
    });

  const text = Array.isArray(res) && res.map((item) => item.text).join(' ');
  if (!text) return Response.json({ error: 'No transcript found' });

  return Response.json({ text, transcription: res });
}
