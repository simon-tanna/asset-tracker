import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

import { useSortStore } from "@/stores/useStortStore";
import { SortConditions, SortDirection } from "@/types/cmc-response";

const AssetAttribute = ({
  attributeName,
  sortCondition,
}: {
  attributeName: string;
  sortCondition: SortConditions;
}) => {
  const { sortBy, setSortBy, sortDir, setSortDir } = useSortStore();

  const isSorted = sortBy === sortCondition;

  const handleSort = () => {
    if (isSorted) {
      setSortDir(sortDir === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC);
    } else {
      setSortBy(sortCondition);
      setSortDir(SortDirection.DESC);
    }
  };

  const iconColor = isSorted ? "#BC4FFF" : "white";

  return (
    <Flex alignItems="center" gap="5px" as="button" onClick={handleSort}>
      <Text fontSize="13px">{attributeName}</Text>
      {isSorted && sortDir === SortDirection.DESC && (
        <TriangleDownIcon boxSize="8px" color={iconColor} />
      )}
      {isSorted && sortDir === SortDirection.ASC && (
        <TriangleUpIcon boxSize="8px" color={iconColor} />
      )}
      {!isSorted && <TriangleDownIcon boxSize="8px" color={iconColor} />}
    </Flex>
  );
};

export default AssetAttribute;
