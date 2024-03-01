import { Button, Flex, Heading, Link, Text } from "@chakra-ui/react";

export interface PageErrorProps {
  statusCode: string;
  title: string;
  description: string;
}

export const PageError = ({ statusCode, title, description }: PageErrorProps) => (
  <Flex flexDirection="column" gap={4} mx="auto" my="auto" align="center">
    <Heading fontSize="8xl" color="accent.500">
      {statusCode}
    </Heading>
    <Heading fontSize="4xl" color="accent.300">
      {title}
    </Heading>
    <Text>{description} </Text>
    <Link href="/">
      <Button>Back to Home</Button>
    </Link>
  </Flex>
);

export const PageError404 = () => (
  <PageError
    statusCode="4🫤4"
    title="Page Not Found"
    description="We couldn't find the page that you were looking for. Head back to the home page"
  />
);

export const PageError500 = () => (
  <PageError
    statusCode="5😱0"
    title="Critical Error"
    description="Something went really wrong! Head back to the home page and try again later."
  />
);
