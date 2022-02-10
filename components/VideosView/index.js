import React from "react";
import { useRouter } from "next/router";
import { Tr, Td, IconButton, Box, Select, chakra } from "@chakra-ui/react";
import { DataTable } from "components/GalleryLayout";

const TABLE_HEADERS = [
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
      <chakra.h2 fontSize={24}>All creations</chakra.h2>
      <DataTable
        HEADERS={
          <Tr bg="gray.300">
            {TABLE_HEADERS.map((header, i) => (
              <Td key={i}>{header.text}</Td>
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
