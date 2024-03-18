import { NextApiRequest, NextApiResponse } from "next";

import manifest from "../../../public/icons/manifest.json";

import { ASSET_QUERY_LIMIT } from "@/constants/asset-attributes";
import { Cryptocurrency } from "@/types/cmc-response";
import { coinMarketCapApi } from "@/utils/axios";

type IconManifest = {
  symbol: string;
  name: string;
  color: string;
};

interface ApiDataResponse {
  data: Cryptocurrency[];
  status: {
    timestamp: string;
    error_code: number;
    error_message: string | null;
    elapsed: number;
    credit_count: number;
  };
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const limit = parseInt(req.query.limit as string) || ASSET_QUERY_LIMIT;
  if (req.method === "GET") {
    try {
      const { data } = await coinMarketCapApi.get<ApiDataResponse>("/listings/latest", {
        params: { limit },
      });

      const formattedData = data.data.map((cryptoCurrency) => {
        const icon = manifest.find(
          (icon) => icon.symbol.toLowerCase() === cryptoCurrency.symbol.toLowerCase()
        );

        const imgPath = icon ? `/icons/color/${icon.symbol.toLowerCase()}.png` : null;
        return { ...cryptoCurrency, img: imgPath };
      });

      res.send(formattedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  }
};

export default handler;
