import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Link,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  chakra,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <Box height="8vh" bg="gray.800" px={6} borderBottom="1px solid white.500">
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-beween"}
          mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={3} alignItems={"center"} mr="auto"></HStack>
          <Flex alignItems={"center"} justifyContent={"space-beween"}>
            <Menu >
                <NextLink href="/" passHref>
                  <Button
                    colorScheme="green"
                    bg="green.400"
                    rounded="full"
                    size="sm"
                    px={6}
                    mr={4}
                    _hover={{
                      bg: "green.500",
                    }}
                  >
                    Home
                  </Button>
                </NextLink>
                <NextLink href="/gallery/videos" passHref>
                  <Button
                    colorScheme="green"
                    bg="green.400"
                    rounded="full"
                    size="sm"
                    px={6}
                    mr={4}
                    _hover={{
                      bg: "green.500",
                    }}
                  >
                    Gallery
                  </Button>
                </NextLink>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
