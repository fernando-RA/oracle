import React from "react";
import { useRouter } from "next/router";
import { Tr, Td, IconButton, Box, Select, chakra } from "@chakra-ui/react";
import { DataTable } from "components/GalleryLayout";
import { Player } from "video-react";


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
          <Player
            src={`https://sentientmachine.online/${props.output.video}`}
          />
        }
      </Td>
    </Tr>
  );
};

const TweetsView = ({ items }) => {
  const { query } = useRouter();
  return items ? (
    <Box>
      <chakra.h2 fontSize={24}>All creations</chakra.h2>
      <div className="grid-container">
        {items
          .slice(0)
          .reverse()
          .map((item, index) => {
            return item.status.status === "complete" ? (
              <div className="grid-item" key={index}>
                <div>{item.output.question}</div>
                <div>{item.output.response}</div>
                <div>
                  {
                    <Player
                      src={`https://sentientmachine.online/${item.output.video}`}
                    />
                  }
                </div>
              </div>
            ) : null;
          })}
      </div>
    </Box>
  ) : null;
};

export default TweetsView;
