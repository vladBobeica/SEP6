import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<void>) => {
  const { userId, mediaId, mediaType } = req.body;

  const response = await fetch(
    "https://delete-media-from-list-3uhs5nx3rq-lz.a.run.app",
    {
      body: JSON.stringify({
        userId,
        mediaId,
        mediaType,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    }
  );

  if (response.ok) return res.status(204).send();

  return res.status(500).send();
};

export default handler;
