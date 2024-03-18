import { SearchIcon } from "@chakra-ui/icons";
import { Container, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";

import AssetStack from "@/components/stacks/AssetStack";

const Home: NextPage = () => (
  <Container maxWidth="container.lg" height="100vh">
    <VStack width="full" paddingY="50px">
      <HStack width="366px" justifyContent="space-between">
        <Flex flexDirection="column">
          <Heading fontSize="24px">Asset Tracker</Heading>
          <Text fontSize="14px" textColor="#5A5A5A">
            Track your favourite crypto assets
          </Text>
        </Flex>
        <SearchIcon boxSize="20px" />
      </HStack>
      <AssetStack />
    </VStack>
  </Container>
);

export default Home;
