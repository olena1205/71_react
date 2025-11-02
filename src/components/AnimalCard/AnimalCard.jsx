import "./styles.css";

// Пропс children - может добавлять в компонент целые части контента (JSX)
function AnimalCard({ animalName, animalSpecies, animalImg, children }) {
  return (
    <div className="animal-card-wrapper">
      {children}
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImg} />
    </div>
  );
}

export default AnimalCard;
