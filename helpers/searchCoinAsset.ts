import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Cryptocurrency } from "@/types/cmc-response";

interface SearchAssetQueryParams {
  symbol: string | null;
}

type SearchAssetQueryKey = ["searchCoinAsset", SearchAssetQueryParams];

const searchCoinAsset = async (context: QueryFunctionContext<SearchAssetQueryKey>) => {
  const { data } = await axios.get<Cryptocurrency>(
    `api/coin-market-cap/${context.queryKey[1]?.symbol}`
  );
  return data;
};

export const useSearchCoinAsset = ({ symbol }: SearchAssetQueryParams) =>
  useQuery({
    queryKey: ["searchCoinAsset", { symbol }],
    queryFn: searchCoinAsset,
    enabled: !!symbol,
  });
