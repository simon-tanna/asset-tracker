import { TriangleDownIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

const AssetAttribute = ({ attributeName }: { attributeName: string }) => (
  <Flex alignItems="center" gap="5px">
    <Text>{attributeName}</Text>
    <TriangleDownIcon />
  </Flex>
);

export default AssetAttribute;
