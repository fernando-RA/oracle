import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";

import TweetsView from "components/VideosView";
import DashboardLayout from "components/GalleryLayout";
import {listAllQuery, runMockData, fetchQuery} from "pages/api/queryOracle"

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

export default function Tweets() {
  const { query } = useRouter();
  const toast = useToast();
  const [questionQuery, setQuestionQuery] = useState("");
  const [queryResonse, setQueryResponse] = useState(null);

  useEffect(() => {
    if (query.q !== "") {
      setQuestionQuery(query.q);
      const data = runMockData(query.q).then(
        items => setQueryResponse(items)
      )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (questionQuery) {
        const data = await runMockData(questionQuery);
        console.log(data)
      }
    } catch (e) {
      toast({
        status: "error",
        description: "Failed to submit",
        duration: 6000,
      });
    }
  };

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
        <TweetsView items={queryResonse} />
      </Box>
    </DashboardLayout>
  );
}
