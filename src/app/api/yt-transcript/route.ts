import { TranscriptResponse, YoutubeTranscript } from 'youtube-transcript';
import { YoutubeTranscriptError } from '../errors/handle';
import ytdl from 'ytdl-core';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return Response.json({ error: 'Query videoId is required' }, { status: 400 });
  }

  try {
    const transcription = await YoutubeTranscript.fetchTranscript(videoId);

    if (!transcription || transcription.length === 0) {
        return Response.json({ error: 'No transcript found for this video', videoId }, { status: 404 });
    }

    // Get info of the video with ytdl
    const info = await ytdl.getBasicInfo('https://www.youtube.com/watch?v=' + videoId);
    const { videoDetails } = info;
    const { title, author, description, thumbnails } = videoDetails;

    const urlThumbnail = [
        thumbnails[0]?.url,
        thumbnails[1]?.url,
        thumbnails[2]?.url,
        thumbnails[3]?.url
    ];

    const videoDetailsToReturn = {
        title,
        author: author.name,
        thumbnails: urlThumbnail,
        description: description?.slice(0, 200),
    }

    return Response.json({
        transcription,
        videoDetails: videoDetailsToReturn
    });
  } catch (err: any) {
    return Response.json({ error: err.message || 'Error fetching YouTube data' }, { status: 500 });
  }
}
