import { Request, Response } from "express";

const handler = (req: Request, res: Response) => {
  if (req.method === "POST") {
    // req.body
  } else {
    res.status(200).json({ name: "John Doe" });
  }
};

export default handler;
