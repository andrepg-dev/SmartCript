import ytdl from 'ytdl-core';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return Response.json({ error: 'Query videoId is required' }, { status: 400 });
  }

  // Get info of the video with ytdl
  const info = await ytdl.getBasicInfo('https://www.youtube.com/watch?v=' + videoId);

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

  return Response.json({
    videoDetails: videoDetailsToReturn
  });
}
