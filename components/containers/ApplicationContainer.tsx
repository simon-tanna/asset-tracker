import { chakra, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const ApplicationContainer = ({ children }: { children: ReactNode }) => (
  <ApplicationWrapper>{children}</ApplicationWrapper>
);

export default ApplicationContainer;

const ApplicationWrapper = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    maxWidth: "100vw",
    overflowX: "clip",
    backgroundColor: "#1e1e1e",
  },
});
