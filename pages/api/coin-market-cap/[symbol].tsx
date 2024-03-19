import { NextApiRequest, NextApiResponse } from "next";

import manifest from "../../../public/icons/manifest.json";

import { Cryptocurrency } from "@/types/cmc-response";
import { coinMarketCapApi } from "@/utils/axios";

interface ApiQuoteResponse {
  data: { [key: string]: Cryptocurrency };
  status: {
    timestamp: string;
    error_code: number;
    error_message: string | null;
    elapsed: number;
    credit_count: number;
  };
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { symbol } = req.query;

  if (!symbol || typeof symbol !== "string") {
    res.status(400).json({ error: "Symbol is required as a query parameter." });
    return;
  }

  if (req.method === "GET") {
    try {
      const { data } = await coinMarketCapApi.get<ApiQuoteResponse>("/quotes/latest", {
        params: { symbol: symbol.toUpperCase() },
      });

      const cryptoData = data.data[symbol.toUpperCase()];
      if (!cryptoData) {
        res.status(404).json({ error: "Cryptocurrency not found" });
        return;
      }

      const icon = manifest.find((icon) => icon.symbol.toLowerCase() === symbol.toLowerCase());

      const imgPath = icon ? `/icons/color/${icon.symbol.toLowerCase()}.png` : null;
      const formattedData = { ...cryptoData, img: imgPath };

      res.status(200).json(formattedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

export default handler;
