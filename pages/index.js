import * as React from "react";
import Head from "next/head";
import Footer from "../components/Footer";

import {
  Box,
  Stack,
  Text,
  useColorModeValue as mode,
  chakra,
  useToken,
  Container,
  Button,
  FormLabel,
  Input,
  LightMode,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const [question, setquestion] = React.useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`dashboard/query?question=${question}`);
  };

  return (
    <>
      <Box bg="gray.800">
        <Head>
          <title>Sentient Machine</title>
          <meta name="description" content="Ask the Oracle" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <chakra.h1
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
              color="white"
            >
              Ask the{" "}
              <Text as={"span"} color={"blue.400"}>
                Sentient Machine
              </Text>{" "} 
            </chakra.h1>
            <chakra.h2 color={"gray.500"} fontSize={{ base: "1xl", md: "2xl" }}>

            Looking for answers? The Oracle is the most powerful piece of software out there. Ask it anything and get answers now.            </chakra.h2>
            <Stack
              direction={"row"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <chakra.form onSubmit={onSubmit}>
                <LightMode>
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    align={{ md: "flex-end" }}
                  >
                    <Box flex="1">
                      <FormLabel htmlFor="email" srOnly>
                        Enter your question
                      </FormLabel>
                      <Input
                        id="email"
                        name="email"
                        size="lg"
                        fontSize="md"
                        bg="white"
                        _placeholder={{ color: "gray.400" }}
                        color="gray.900"
                        placeholder=""
                        focusBorderColor="blue.200"
                        onChange={(e) => {
                          setquestion(e.target.value);
                        }}
                      />
                    </Box>
                    <Button
                      type="submit"
                      size="lg"
                      colorScheme="yellow"
                      fontSize="md"
                      px="10"
                    >
                      Make a question
                    </Button>
                  </Stack>
                </LightMode>
              </chakra.form>{" "}
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
