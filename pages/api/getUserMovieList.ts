import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<void>) => {
  const { userId } = req.body;

  const response = await fetch(
    "https://get-user-movies-3uhs5nx3rq-lz.a.run.app",
    {
      body: JSON.stringify({
        userId,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    }
  );

  if (response.ok) return res.status(200).send(await response.json());

  return res.status(500).send();
};

export default handler;
