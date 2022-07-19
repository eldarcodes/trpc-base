import { NextApiRequest, NextApiResponse, NextComponentType } from "next";

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return { req, res };
}

export type Context = ReturnType<typeof createContext>;
