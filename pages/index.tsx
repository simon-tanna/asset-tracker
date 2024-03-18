import { SearchIcon } from "@chakra-ui/icons";
import {
  Card,
  Container,
  Flex,
  HStack,
  Heading,
  ListItem,
  Skeleton,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

import AssetsHeader from "@/components/headers/AssetsHeader";
import Asset from "@/components/stacks/Asset";
import { ASSET_QUERY_LIMIT } from "@/constants/asset-attributes";
import { useGetCoinAssets } from "@/helpers/getCoinAssets";

const Home: NextPage = () => {
  const { data: cryptoCurrencies, isLoading } = useGetCoinAssets();

  return (
    <Container maxWidth="container.lg" height="100vh">
      <VStack width="full">
        <HStack width="full" justifyContent="center">
          <VStack>
            <Heading>Asset Tracker</Heading>
            <Text>Track your favourite crypto assets</Text>
          </VStack>
          <SearchIcon />
        </HStack>
        <VStack>
          <AssetsHeader />
          {isLoading &&
            Array.from({ length: ASSET_QUERY_LIMIT }, (_, index) => (
              <Flex key={index} width="370px" height="60px" alignItems="center">
                <Skeleton height="100%" width="100%" borderRadius="sm" />
              </Flex>
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
      </VStack>
    </Container>
  );
};

export default Home;
