import { VStack, Flex, Skeleton } from "@chakra-ui/react";

import Asset from "../cards/Asset";
import AssetsHeader from "../headers/AssetsHeader";

import { ASSET_QUERY_LIMIT } from "@/constants/asset-attributes";
import { useGetCoinAssets } from "@/helpers/getCoinAssets";
import { AssetStackColumnFlex } from "@/ui/chakra-factories/Flex";

const AssetStack = () => {
  const { data: cryptoCurrencies, isLoading } = useGetCoinAssets({ limit: ASSET_QUERY_LIMIT }); //TODO: error handling
  return (
    <VStack>
      <AssetsHeader />
      {/* Loading skeleton */}
      {isLoading &&
        Array.from({ length: ASSET_QUERY_LIMIT }, (_, index) => (
          <AssetStackColumnFlex key={index}>
            <Skeleton height="100%" width="100%" borderRadius="sm" />
          </AssetStackColumnFlex>
        ))}
      {cryptoCurrencies?.map((cryptoCurrency) => (
        <Asset
          key={cryptoCurrency.id}
          name={cryptoCurrency.symbol}
          ranking={cryptoCurrency.cmc_rank}
          image={cryptoCurrency.img ?? "/icons/color/abt.png"}
          marketCap={cryptoCurrency.quote.USD.market_cap}
          price={cryptoCurrency.quote.USD.price}
          changePercentage={cryptoCurrency.quote.USD.percent_change_24h}
        />
      ))}
    </VStack>
  );
};

export default AssetStack;
