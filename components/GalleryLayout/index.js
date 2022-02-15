import * as React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Box,
  Circle,
  Divider,
  Flex,
  Stack,
  useColorModeValue as mode,
  chakra,
} from "@chakra-ui/react";
import DataTable from "./DataTable"

const DashboardLayout = ({
  crumbs = [],
  title = "Missing Page Title",
  subtitle = "",
  headerActions,
  children,
}) => {
  const router = useRouter();
  const headerBg = mode("white", "gray.800");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <Box height="92vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box bg={headerBg} flex="1" p="6" height="100%" overflow="scroll">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex>
              {crumbs.map((crumb, i) => (
                <chakra.h2
                  fontSize={24}
                  key={i}
                  color="gray.500"
                  _after={{ content: '"/"', marginLeft: 2 }}
                  mr={2}
                >
                  {crumb.link ? (
                    <NextLink href={crumb.link}>{crumb.title}</NextLink>
                  ) : (
                    crumb.title
                  )}
                </chakra.h2>
              ))}
              {title && <chakra.h2 fontSize={24}>{title}</chakra.h2>}
            </Flex>
            {headerActions && headerActions}
          </Flex>
          {subtitle && <chakra.h3 fontSize={18}>{subtitle}</chakra.h3>}
          <Divider my={4} />
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export {DataTable, DashboardLayout as default };