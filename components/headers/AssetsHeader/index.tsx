import { HStack } from "@chakra-ui/react";

import AssetAttribute from "./AssetAttribute";

import { assetAttributes } from "@/constants/asset-attributes";

const AssetsHeader = () => (
  <HStack spacing={10} width="370px" justifyContent="space-between">
    {assetAttributes.map((attribute) => (
      <AssetAttribute key={attribute} attributeName={attribute} />
    ))}
  </HStack>
);

export default AssetsHeader;
