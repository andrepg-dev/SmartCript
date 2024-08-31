import { TranscriptResponse, YoutubeTranscript } from 'youtube-transcript';
import { YoutubeTranscriptError } from '../errors/handle';
import getVideoId from 'get-video-id';
import ytdl from 'ytdl-core'

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

  // Get info of the video with ytdl
  const info = await ytdl.getBasicInfo(url_query);

  const { videoDetails } = info;
  const { title, author, description, thumbnails, viewCount, likes, dislikes } = videoDetails;

  const urlThumbnail = [
    thumbnails[0].url,
    thumbnails[1].url,
    thumbnails[2].url,
    thumbnails[3].url
  ];

  // Cortar la descripcion a 100 caracteres
  const Cutdescription = description && description.length > 100 && description.slice(0, 200);

  const videoDetailsToReturn = {
    title,
    author: author.name,
    thumbnails: urlThumbnail,
    description: Cutdescription,
    viewCount,
    likes,
    dislikes
  }

  if (!res.length || res === 'Transcript is disabled on this video') {
    return Response.json({ error: 'No transcript found for this video', videoId, videoDetails: videoDetailsToReturn }, { status: 404 })
  };

  return Response.json({
    transcription: res,
    videoDetails: videoDetailsToReturn
  });
}
