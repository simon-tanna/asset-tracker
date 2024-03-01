import { chakra, Flex } from "@chakra-ui/react";
import Head from "next/head";

import { AppNavigation } from "../navigation";

import { appNavigation } from "@/constants";

export interface AppLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const AppLayout = ({ title, children }: AppLayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <AppNavigation navigationItems={appNavigation} />
    <AppContainer>{children}</AppContainer>
  </>
);

const AppContainer = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    overflow: "hidden",
    pt: "80px",
    maxW: "6xl",
    mx: "auto",
    px: "20px",
    gap: "20px",
    pb: "80px",
  },
});
