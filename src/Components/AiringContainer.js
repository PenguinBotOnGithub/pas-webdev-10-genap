import React from "react";
import AiringCard from "./AiringCard.js";

function AiringContainer({ data }) {
  return (
    <div className="airing-container">
      {data.map((anime) => {
        return <AiringCard {...anime} key={anime.title + "-key"} />;
      })}
    </div>
  );
}

export default AiringContainer;
