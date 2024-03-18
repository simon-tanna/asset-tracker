import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Cryptocurrency } from "@/types/cmc-response";

interface CoinAssetQueryParams {
  limit: number;
}

type CoinAssetQueryKey = ["coinAssets", CoinAssetQueryParams];

const getCoinAssetsApi = async (context: QueryFunctionContext<CoinAssetQueryKey>) => {
  const { data } = await axios.get<Cryptocurrency[]>("api/coin-market-cap", {
    params: { limit: context.queryKey[1]?.limit },
  });
  return data;
};

export const useGetCoinAssets = ({ limit }: { limit: number }) =>
  useQuery({ queryKey: ["coinAssets", { limit }], queryFn: getCoinAssetsApi });
