function PTWCard({ title, studio, img, onDelete, id, onPTW }) {
  return (
    <div className="ptw-card">
      <img src={img} alt={title + "-alt"} />
      <h3>{title}</h3>
      <h4>{studio}</h4>
      <button onClick={() => onDelete(id)} className="remove-ptw airing-button">
        Remove from Plan To Watch
      </button>
    </div>
  );
}

export default PTWCard;
