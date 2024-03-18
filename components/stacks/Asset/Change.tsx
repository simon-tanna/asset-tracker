import { ArrowUpIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

const Change = ({ changePercentage }: { changePercentage: number }) => (
  <Flex border="1px solid red" width="15%">
    <Text fontSize="11px">
      <TriangleUpIcon />
      {changePercentage.toFixed(2)}%
    </Text>
  </Flex>
);

export default Change;
