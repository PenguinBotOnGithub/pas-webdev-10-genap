function AiringCard({ title, studio, img, onSet, onDelete, id, onPTW }) {
  const button = !onPTW ? (
    <button onClick={() => onSet(id)} className="add-ptw ptw-button">
      Add to Plan To Watch
    </button>
  ) : (
    <button onClick={() => onDelete(id)} className="remove-ptw ptw-button">
      Remove from Plan To Watch
    </button>
  );

  return (
    <div className="airing-card">
      <img src={img} alt={title + "-alt"} />
      <h3>{title}</h3>
      <h4>{studio}</h4>
      {button}
    </div>
  );
}

export default AiringCard;
