function AiringCard({ title, studio, img, onAdd, onDelete, hash, onPTW }) {
  console.log(hash);
  return (
    <div className="airing-card">
      <img src={img} alt={title + "-alt"} />
      <h3>{title}</h3>
      <h4>{studio}</h4>
      {
        // {onPTW ? (
        //   <button onClick={onAdd(id)} className="add-ptw airing-button">
        //     Add to Plan To Watch
        //   </button>
        // ) : (
        //   <button onClick={onDelete(id)} className="remove-ptw airing-button">
        //     Remove from Plan To Watch
        //   </button>
        // )}
      }
    </div>
  );
}

export default AiringCard;
