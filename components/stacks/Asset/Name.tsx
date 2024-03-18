import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

interface NameProps {
  image: string;
  name: string;
  marketCap: string;
}

const Name = ({ image, name, marketCap }: NameProps) => (
  <HStack h="100%" justifyContent="flex-start" w="35%">
    <Image src={image} alt={name} maxHeight="80%" />
    <VStack alignItems="flex-start" spacing="3px">
      <Heading fontSize="14px">{name}</Heading>
      <Text fontSize="11px">{marketCap}</Text>
    </VStack>
  </HStack>
);

export default Name;
