import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Cryptocurrency, SortConditions, SortDirection } from "@/types/cmc-response";

interface CoinAssetQueryParams {
  limit: number;
  sort?: SortConditions;
  sortDir?: SortDirection;
}

type CoinAssetQueryKey = ["coinAssets", CoinAssetQueryParams];

const getCoinAssetsApi = async (context: QueryFunctionContext<CoinAssetQueryKey>) => {
  const { data } = await axios.get<Cryptocurrency[]>("api/coin-market-cap", {
    params: {
      limit: context.queryKey[1]?.limit,
      sort: context.queryKey[1]?.sort,
      sortDir: context.queryKey[1]?.sortDir,
    },
  });
  return data;
};

export const useGetCoinAssets = ({ limit, sort, sortDir }: CoinAssetQueryParams) =>
  useQuery({ queryKey: ["coinAssets", { limit, sort, sortDir }], queryFn: getCoinAssetsApi });
