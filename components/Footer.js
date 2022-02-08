import {
  Box,
  ButtonGroup,
  IconButton,
  Stack,
  Text,
  useColorModeValue as mode,
  chakra,
  useToken,
} from "@chakra-ui/react";

import { FaLink, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [white, black] = useToken("colors", ["white", "gray.800"]);

  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Stack>
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <ButtonGroup variant="ghost" color="gray.600">
            <chakra.h1>Made by Sentient Machines</chakra.h1>
            <IconButton
              as="a"
              href="https://abraham.ai"
              aria-label="Twitter"
              icon={<FaLink fontSize="20px" />}
            />
          </ButtonGroup>
        </Stack>

        <Text alignSelf={{ base: "center", sm: "start" }} fontSize="sm">
          &copy; {new Date().getFullYear()} All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;