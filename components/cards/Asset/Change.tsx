import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

const Change = ({ changePercentage }: { changePercentage: number }) => {
  const isPositive = changePercentage > 0;

  const colour = isPositive
    ? { bg: "#24FF001A", text: "#24FF00" }
    : { bg: "#FF00001A", text: "#FF0000" };

  /**
   * Formats a large percentage to a more readable format.
   *
   * @param percentage The percentage to format.
   * @returns The formatted percentage.
   */
  const formatLargePercentage = (percentage: number) => {
    const absPercentage = Math.abs(percentage);
    let suffix = "%";
    let value = percentage.toFixed(1);

    if (absPercentage >= 1e9) {
      suffix = "B%";
      value = (percentage / 1e9).toFixed(0);
    } else if (absPercentage >= 1e6) {
      suffix = "M%";
      value = (percentage / 1e6).toFixed(0);
    } else if (absPercentage >= 1e3) {
      suffix = "K%";
      value = (percentage / 1e3).toFixed(1);
    }

    return `${value}${suffix}`;
  };

  return (
    <Flex backgroundColor={colour.bg} width="20%" justifyContent="center">
      <Text fontSize="11px" padding="3px" textColor={colour.text}>
        {isPositive ? (
          <TriangleUpIcon marginBottom="3px" />
        ) : (
          <TriangleDownIcon marginBottom="3px" />
        )}{" "}
        {formatLargePercentage(changePercentage)}
      </Text>
    </Flex>
  );
};

export default Change;
