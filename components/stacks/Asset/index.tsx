import { Flex, Skeleton } from "@chakra-ui/react";

import Change from "./Change";
import Name from "./Name";
import Price from "./Price";
import Rank from "./Rank";

interface AssetProps {
  ranking: number;
  name: string;
  image: string;
  marketCap: number;
  price: number;
  changePercentage: number;
}

const formatNumber = (value: number) => {
  if (value >= 1e9) {
    return `${(value / 1e9).toFixed(1)} Bn`;
  } else if (value >= 1e6) {
    return `${(value / 1e6).toFixed(1)} Mn`;
  } else {
    return value.toString(); // Handles values less than 1 million.
  }
};

const Asset = ({ ranking, name, image, marketCap, price, changePercentage }: AssetProps) => (
  <Flex width="370px" height="60px" alignItems="center">
    <Rank ranking={ranking} />
    <Name name={name} image={image} marketCap={formatNumber(marketCap)} />
    <Price price={price} />
    <Change changePercentage={changePercentage} />
  </Flex>
);

export default Asset;
