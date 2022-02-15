import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";

import TweetsView from "components/VideosView";
import DashboardLayout from "components/GalleryLayout";
import {
  listAllQuery,
  runMockData,
  runQuery,
  fetchQuery,
} from "pages/api/queryOracle";

import {
  Box,
  useColorModeValue as mode,
  useToast,
  chakra,
  LightMode,
  Stack,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

import { Player } from "video-react";

export default function Tweets() {
  const { query } = useRouter();
  const toast = useToast();
  const [questionQuery, setQuestionQuery] = useState("");
  const [queryAllResponse, setAllQueryResponse] = useState(null);
  const [tokenResponse, setTokenResponse] = useState("");
  const [fetchResponse, setFetchResponse] = useState(null);
  const [isComplete, setIsComplete] = useState("");

  useEffect(() => {
    if (query.q !== "") {
      const allData = listAllQuery().then((items) =>
        setAllQueryResponse(items)
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const fdata = await runQuery({ question: questionQuery });
      console.log("data submit", fdata);
      setTokenResponse(fdata.token);
    } catch (e) {
      toast({
        status: "error",
        description: "Failed to submit",
        duration: 6000,
      });
    }
  };

  useEffect(() => {
    if (tokenResponse !== "") {
      fetchQuery({ token: tokenResponse }).then((items) => {
        items.output.status === "queue"
          ? setIsComplete(false)
          : setIsComplete(true);
        setFetchResponse([items]);
      });
    }
  }, [tokenResponse]);

  return (
    <DashboardLayout title="Videos">
      <chakra.h1>Ask a new question:</chakra.h1>
      <Box display="flex" alignItems="center" justifyContent="flex-start">
        <chakra.form onSubmit={onSubmit}>
          <LightMode>
            <Stack
              direction={{ base: "column", md: "row" }}
              align={{ md: "flex-end" }}
            >
              <Box flex="1">
                <FormLabel htmlFor="questionQuery" srOnly>
                  Ask the Oracle
                </FormLabel>
                <Input
                  id="questionQuery"
                  name="questionQuery"
                  size="lg"
                  fontSize="md"
                  bg="white"
                  _placeholder={{ color: "gray.400" }}
                  color="gray.900"
                  placeholder="@"
                  focusBorderColor="blue.200"
                  value={questionQuery}
                  onChange={(e) => {
                    setQuestionQuery(e.target.value);
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
                Ask the Oracle
              </Button>
            </Stack>
          </LightMode>
        </chakra.form>
      </Box>
      <Box>
        {tokenResponse ? (
          <h1>Token Response: {tokenResponse}</h1>
        ) : (
          <h1>Make a Search</h1>
        )}
        {fetchResponse ? (
          <div>
            <h1>{console.log(fetchResponse)}</h1>
            {fetchResponse.status === "complete" ? (
              <Player
                src={`https://sentientmachine.online/${fetchResponse[0].output.video}`}
              />
            ) : (
              <h1>
                Loading...
                {`Question: ${fetchResponse.config.question}, Token: ${fetchResponse.status.status}`}{" "}
              </h1>
            )}
          </div>
        ) : (
          <h1>Make a Search</h1>
        )}
      </Box>
      <Box>
        <TweetsView items={queryAllResponse} />
      </Box>
    </DashboardLayout>
  );
}
