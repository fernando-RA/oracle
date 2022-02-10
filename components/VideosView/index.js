import React from "react";
import { useRouter } from "next/router";
import { Tr, Td, IconButton, Box, Select, chakra } from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { DataTable } from "components/GalleryLayout";

const TWEET_HEADERS = [
  {
    text: "Question",
    props: {},
  },
  {
    text: "Answer",
    props: {},
  },
  {
    text: "link to video",
    props: {},
  },
];

const Tweet = (props) => {
  return (
    <Tr>
      <Td>{props.output.question}</Td>
      <Td>{props.output.response}</Td>
      <Td>
        {
          <Td>
            <a href={`https://sentientmachine.online/${props.output.html}`}>
              Link
            </a>
          </Td>
        }
      </Td>
    </Tr>
  );
};

const TweetsView = ({ items }) => {
  const { query } = useRouter();
  console.log("tweetsview items", items);
  return items ? (
    <Box>
      <chakra.h2 fontSize={24}>Results</chakra.h2>
      <DataTable
        HEADERS={
          <Tr bg="gray.300">
            {TWEET_HEADERS.map((header) => (
              <Td>{header.text}</Td>
            ))}
          </Tr>
        }
      >
        {items.slice(0).reverse().map((item, index) => {
          return item.status.status === "complete" ? (
            <Tweet key={index} {...item} />
          ) : null;
        })}
      </DataTable>
    </Box>
  ) : null;
};

export default TweetsView;
