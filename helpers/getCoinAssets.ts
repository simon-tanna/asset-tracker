import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Cryptocurrency } from "@/types/cmc-response";

// interface CoinAssetQueryParams {
//   limit?: number;
// }

// type CoinAssetQueryKey = ["coinAssets", CoinAssetQueryParams];

const getCoinAssetsApi = async () => {
  const { data } = await axios.get<Cryptocurrency[]>("api/coin-market-cap");
  return data;
};

export const useGetCoinAssets = () =>
  useQuery({ queryKey: ["coinAssets"], queryFn: getCoinAssetsApi });
