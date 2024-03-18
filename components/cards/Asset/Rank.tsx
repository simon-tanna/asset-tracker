import { Flex, Text } from "@chakra-ui/react";

const Rank = ({ ranking }: { ranking: number }) => (
  <Flex width="15%">
    <Text fontSize="11px">#{ranking}</Text>
  </Flex>
);

export default Rank;
