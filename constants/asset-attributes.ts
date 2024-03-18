import { SortConditions } from "@/types/cmc-response";

export const assetAttributes = [
  { text: "#", sortCondition: SortConditions.MARKET_CAP },
  { text: "Name", sortCondition: SortConditions.NAME },
  { text: "Price", sortCondition: SortConditions.PRICE },
  { text: "24h %", sortCondition: SortConditions.PERCENT_CHANGE },
];

export const ASSET_QUERY_LIMIT = 25;
