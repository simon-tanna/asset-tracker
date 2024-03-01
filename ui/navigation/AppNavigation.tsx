import { Flex, chakra } from "@chakra-ui/react";
import { ReactNode } from "react";

import { useIsMobile } from "../hooks";

import { AppDesktopNavigation } from "./AppDesktopNavigation";
import { AppMobileNavigation } from "./AppMobileNavigation";

import { NavigationItemProps } from "@/types";

export interface AppNavigationProps {
  navigationItems?: NavigationItemProps[];
}

export const AppNavigation = ({ navigationItems }: AppNavigationProps) => {
  const isMobile = useIsMobile();

  return (
    <NavbarContainer>
      {isMobile ? (
        <AppMobileNavigation navigationItems={navigationItems} />
      ) : (
        <AppDesktopNavigation navigationItems={navigationItems} />
      )}
    </NavbarContainer>
  );
};

const NavbarContainer = chakra(Flex, {
  baseStyle: {
    alignItems: "center",
    justifyContent: "flex-start",
    h: "60px",
    px: "10px",
    border: "1px solid",
    borderColor: "border",
    roundedBottom: "2xl",
    boxShadow: "base",
    position: "fixed",
    w: "full",
    zIndex: "999",
    bg: "itemBg",
    gap: "10px",
  },
});
