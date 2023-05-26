import AiringCard from "./AiringCard.jsx";

function AiringContainer({ data, onSet, onDelete }) {
  // Used an if statement instead of a ternary operator for readability
  if (data.length !== 0) {
    return (
      <div className="airing-container">
        {data.map((anime) => {
          return (
            <AiringCard
              {...anime}
              key={anime.title + "-key"}
              onSet={onSet}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <img src="/images/loading.png" alt="loading" className="loading-image" />
    );
  }
}

export default AiringContainer;
