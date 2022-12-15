import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<void>) => {
  const { userId, movieId, mediaType, imageUrl } = req.body;

  const response = await fetch("https://add-movie-3uhs5nx3rq-lz.a.run.app", {
    body: JSON.stringify({
      userId,
      movieId,
      mediaType,
      imageUrl,
    }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  if (response.ok) return res.status(201).send();

  return res.status(500).send();
};

export default handler;
