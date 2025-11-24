function projectsCard({ name, url, description }) {
  return (
    <div className="repo-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default projectsCard;
