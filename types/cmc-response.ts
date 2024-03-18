export interface Cryptocurrency {
  circulating_supply: number;
  cmc_rank: number;
  date_added: string;
  id: number;
  infinite_supply: boolean;
  last_updated: string;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  platform: null;
  img?: string;
  quote: {
    USD: {
      price: number;
      volume_24h: number;
      volume_change_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      market_cap: number;
      market_cap_dominance: number;
      fully_diluted_market_cap: number;
      last_updated: string;
    };
  };
  self_reported_circulating_supply: null;
  self_reported_market_cap: null;
  slug: string;
  symbol: string;
  tags: string[];
  total_supply: number;
  tvl_ratio: null;
}
