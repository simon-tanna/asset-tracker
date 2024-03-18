import axios from "axios";

export const coinMarketCapApi = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/v1/cryptocurrency",
  headers: {
    "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_COINMARKETCAP_API_KEY,
  },
});
