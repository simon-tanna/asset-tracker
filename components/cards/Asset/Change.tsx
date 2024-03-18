import { ArrowUpIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

const Change = ({ changePercentage }: { changePercentage: number }) => {
  const isPositive = changePercentage > 0;

  const colour = isPositive
    ? { bg: "#24FF001A", text: "#24FF00" }
    : { bg: "#FF00001A", text: "#FF0000" };

  return (
    <Flex backgroundColor={colour.bg} width="20%" justifyContent="center">
      <Text fontSize="11px" padding="3px" textColor={colour.text}>
        {isPositive ? (
          <TriangleUpIcon marginBottom="3px" />
        ) : (
          <TriangleDownIcon marginBottom="3px" />
        )}{" "}
        {changePercentage.toFixed(2)}%
      </Text>
    </Flex>
  );
};

export default Change;
