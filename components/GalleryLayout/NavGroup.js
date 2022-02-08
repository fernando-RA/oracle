import * as React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

const NavGroup = ({ label, children }) => (
  <Box>
    <Text
      px="3"
      fontSize="xs"
      fontWeight="semibold"
      textTransform="uppercase"
      letterSpacing="widest"
      color="gray.500"
      mb="3"
    >
      {label}
    </Text>
    <Stack spacing="1">{children}</Stack>
  </Box>
);

export default NavGroup;