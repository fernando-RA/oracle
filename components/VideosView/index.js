import React from "react";
import {useRouter} from "next/router";
import { Tr, Td, IconButton, Box, Select, chakra } from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { DataTable } from "components/GalleryLayout";

const TWEET_HEADERS = [
  {
    text: "Tweet",
    props: {},
  },
  {
    text: "Link",
    props: {},
  },
  {
    text: "Score",
    props: {},
  },
];

const Tweet = ({ user, id, public_metrics, text }) => {
  return (
    <Tr>
      <Td>{text}</Td>
      <Td><a href={`https://twitter.com/${user}/status/${id}`}>Link</a></Td>
      <Td>{public_metrics.like_count + public_metrics.retweet_count + public_metrics.reply_count + public_metrics.quote_count}</Td>
    </Tr>
  );
};

const TweetsView = ({ items }) => {
  const { query } = useRouter();
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
        {items.sortedByScore.map((item) => {
          item.user = query.user;
          return <Tweet {...item} />
        })}
      </DataTable>
    </Box>
  ) : null;
};

export default TweetsView;