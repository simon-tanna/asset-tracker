import { Card, Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => (
  <Flex justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
    <Heading>🚀 Asset Tracker</Heading>
    <Text>This is the repository template for the Asset Tracker assessment.</Text>
    <Text>The app is setup with the following:</Text>
    <UnorderedList pl="10px">
      <ListItem>
        <Link href="https://nextjs.org/docs" target="_blank">
          Next.js
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://chakra-ui.com/docs/getting-started" target="_blank">
          Chakra UI
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://tanstack.com/query/latest/docs/framework/react/overview"
          target="_blank"
        >
          React Query
        </Link>
      </ListItem>
    </UnorderedList>
  </Flex>
);

export default Home;
