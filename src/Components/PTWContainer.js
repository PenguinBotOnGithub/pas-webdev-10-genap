import PTWCard from "./PTWCard.js";

function PTWContainer({ data, onDelete }) {
  // Used an if statement instead of a ternary operator for readability
  if (data.length !== 0) {
    return (
      <div className="ptw-container">
        {data.map((anime) => {
          return (
            <PTWCard
              {...anime}
              key={anime.title + "-key"}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      // Placeholder for a placeholder lol
      <img src="/images/loading.png" alt="loading" className="loading-image" />
    );
  }
}

export default PTWContainer;
