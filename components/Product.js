import React from "react";
import NextLink from "next/link";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

import { urlFor } from "lib/fe/sanity";

export function Product({
  image,
  title,
  price,
  description,
  colorScheme,
  slug,
  micro,
}) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"300px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${urlFor(image).url()})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            alt={description}
            rounded={"lg"}
            height={300}
            width={300}
            objectFit={"cover"}
            src={urlFor(image).url()}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          {!micro && (
            <>
              <Heading
                fontSize={"2xl"}
                fontFamily={"body"}
                fontWeight={500}
                textAlign="center"
              >
                {title}
              </Heading>
              <Text color={"gray.500"} fontSize={"sm"} textAlign="center">
                {description.substring(0, 82).trim()}...
              </Text>
              <Stack direction={"row"} align={"center"} mb={2}>
                <Text fontWeight={400} fontSize={"xl"}>
                  Get it for just
                </Text>
                <Text fontWeight={800} fontSize={"xl"}>
                  ${price}
                </Text>
              </Stack>
            </>
          )}
          <NextLink href={`/products/${slug?.current}`} passHref>
            <Button
              size="lg"
              colorScheme={colorScheme}
              fontSize="md"
              px="10"
              isFullWidth
            >
              I Want This!
            </Button>
          </NextLink>
        </Stack>
      </Box>
    </Center>
  );
}
