import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
  Skeleton,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";

import Asset from "@/components/cards/Asset";
import SearchAsset from "@/components/inputs/SearchAsset";
import AssetStack from "@/components/stacks/AssetStack";
import { useSearchCoinAsset } from "@/helpers/searchCoinAsset";
import { AssetStackColumnFlex } from "@/ui/chakra-factories/Flex";

const Home: NextPage = () => {
  const [inputSymbol, setInputSymbol] = useState("");
  const [symbol, setSymbol] = useState<string | null>(null);

  const { data, isLoading, isError } = useSearchCoinAsset({ symbol });

  const { isOpen, onToggle } = useDisclosure();

  // Clear the symbol when the search bar is closed
  useEffect(() => {
    if (!isOpen) {
      setSymbol(null);
      setInputSymbol(""); // Also clear the input field
    }
  }, [isOpen]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSymbol(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSymbol(inputSymbol);
  };

  return (
    <Container maxWidth="container.lg" height="100%">
      <VStack width="full" paddingY="50px">
        <HStack width="366px" justifyContent="space-between" height="100px">
          <Flex flexDirection="column" display={isOpen ? "none" : "flex"}>
            <Heading fontSize="24px">Asset Tracker</Heading>
            <Text fontSize="14px" textColor="#5A5A5A">
              Track your favourite crypto assets
            </Text>
          </Flex>
          <SearchAsset
            isOpen={isOpen}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            inputSymbol={inputSymbol}
          />
          <IconButton
            aria-label="Search"
            icon={isOpen ? <CloseIcon color="orange.50" /> : <SearchIcon color="orange.50" />}
            border="none"
            background="transparent"
            onClick={onToggle}
          />
        </HStack>
        {!isOpen && <AssetStack />}
        {isOpen && isLoading && (
          <AssetStackColumnFlex>
            <Skeleton height="100%" width="100%" borderRadius="sm" />
          </AssetStackColumnFlex>
        )}
        {data && (
          <Asset
            ranking={data.cmc_rank}
            name={data.symbol}
            image={data.img ?? ""}
            marketCap={data.quote.USD.market_cap}
            price={data.quote.USD.price}
            changePercentage={data.quote.USD.percent_change_24h}
          />
        )}
        {isError && <Text color="red">Could not get data for {inputSymbol}.</Text>}
      </VStack>
    </Container>
  );
};

export default Home;
