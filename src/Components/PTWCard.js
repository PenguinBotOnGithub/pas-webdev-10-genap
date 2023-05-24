function PTWCard({ title, studio, img, onDelete, hash, onPTW }) {
  console.log(`PTWCard: ${hash}`);
  return (
    <div className="ptw-card">
      <img src={img} alt={title + "-alt"} />
      <h3>{title}</h3>
      <h4>{studio}</h4>
      <button onClick={onDelete(hash)} className="remove-ptw airing-button">
        Remove from Plan To Watch
      </button>
      }
    </div>
  );
}

export default PTWCard;
