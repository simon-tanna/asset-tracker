import { Box, chakra, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { DarkModeButton } from "../buttons";
import { usePath } from "../hooks";
import { nexethLogoTransparent } from "../images";

import { NavigationItemProps } from "@/types";

export interface AppDesktopNavigationProps {
  navigationItems?: NavigationItemProps[];
  additionalNavigation?: ReactNode;
}

export const AppDesktopNavigation = ({ navigationItems }: AppDesktopNavigationProps) => {
  const { basePath, path } = usePath();

  return (
    <>
      <Link href="/">
        <Image src={nexethLogoTransparent} alt="nexeth-logo" height="40" width="40" />
      </Link>
      {navigationItems?.map((item) => {
        const selected = item.href ? path.startsWith(item.href) : item.title === basePath;

        return (
          <Flex key={item.title} flexDirection="column">
            <Link href={item.href ?? "#"}>
              <NavigationItem>{item.title}</NavigationItem>
            </Link>
            <Underline w={selected ? "50px" : "0px"} />
          </Flex>
        );
      })}

      <Spacer />

      <DarkModeButton />
    </>
  );
};

const NavigationItem = chakra(Text, {
  baseStyle: {
    fontSize: "sm",
    _hover: {
      bg: "itemOffsetBg",
      rounded: "md",
      boxShadow: "inner",
    },
    py: "5px",
    px: "10px",
  },
});

const Underline = chakra(Box, {
  baseStyle: {
    bg: "accent.400",
    transition: "width 0.3s ease",
    h: "2px",
    mx: "auto",
  },
});
