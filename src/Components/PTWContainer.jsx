import PTWCard from "./PTWCard.jsx";

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
      <div className="no-anime-container">
        <h2>NO ANIME?</h2>
        <img src="/images/no-anime-og.jpg" alt="NO ANIME?" />
        <h3>Keep track of your watchlist easily here!</h3>
      </div>
    );
  }
}

export default PTWContainer;
