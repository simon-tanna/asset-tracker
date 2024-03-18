import { HStack } from "@chakra-ui/react";

import AssetAttribute from "./AssetAttribute";

import { assetAttributes } from "@/constants/asset-attributes";

const AssetsHeader = () => (
  <HStack spacing={10} width="370px" justifyContent="space-between">
    {assetAttributes.map((attribute) => (
      <AssetAttribute
        key={attribute.text}
        attributeName={attribute.text}
        sortCondition={attribute.sortCondition}
      />
    ))}
  </HStack>
);

export default AssetsHeader;
