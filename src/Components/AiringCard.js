function AiringCard({ title, studio, img, onSet, onDelete, hash, onPTW }) {
  console.log(`AiringCard: ${hash}`);
  // const button = !onPTW ? (
  //   <button onClick={onSet(hash)} className="add-ptw airing-button">
  //     Add to Plan To Watch
  //   </button>
  // ) : (
  //   <button onClick={onDelete(hash)} className="remove-ptw airing-button">
  //     Remove from Plan To Watch
  //   </button>
  // );

  return (
    <div className="airing-card">
      <img src={img} alt={title + "-alt"} />
      <h3>{title}</h3>
      <h4>{studio}</h4>
      {
        // For some reason this button below
        // runs the onSet function without being clicked first??
      }
      <button onClick={onSet(hash)} className="add-ptw airing-button">
        Add to Plan To Watch
      </button>
    </div>
  );
}

export default AiringCard;
