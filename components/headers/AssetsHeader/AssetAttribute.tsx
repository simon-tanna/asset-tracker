import { TriangleDownIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

const AssetAttribute = ({ attributeName }: { attributeName: string }) => (
  <Flex alignItems="center" gap="5px">
    <Text fontSize="13px">{attributeName}</Text>
    <TriangleDownIcon boxSize="8px" />
  </Flex>
);

export default AssetAttribute;
