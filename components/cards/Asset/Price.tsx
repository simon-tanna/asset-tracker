import { Heading } from "@chakra-ui/react";

const Price = ({ price }: { price: number }) => (
  <Heading fontSize="12px" width="35%" textAlign="center" paddingRight="35px">
    ${price.toFixed(2)}
  </Heading>
);

export default Price;
