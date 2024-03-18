import { Heading } from "@chakra-ui/react";

const Price = ({ price }: { price: number }) => (
  <Heading fontSize="14px" width="40%" textAlign="end" paddingRight="35px">
    ${price.toFixed(2)}
  </Heading>
);

export default Price;
