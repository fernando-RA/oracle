import React from "react";
import { Player } from "video-react";

const VideosView = ({ items }) => {
  return items ? (
    <div>
      <h2 fontSize={24}>All creations</h2>
      <div className="grid-container">
        {items
          .slice(0)
          .reverse()
          .map((item, index) => {
            return item.status.status === "complete" ? (
              <div className="grid-item" key={index}>
                <div className="player">
                  {
                    <Player
                      src={`https://sentientmachine.online/${item.output.video}`}
                    />
                  }
                </div>
                <h3>{item.output.question}</h3>
                <p>{item.output.response}</p>
              </div>
            ) : null;
          })}
      </div>
    </div>
  ) : null;
};

export default VideosView;
