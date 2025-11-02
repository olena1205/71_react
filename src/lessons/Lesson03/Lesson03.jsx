import AnimalCard from "../../components/AnimalCard/AnimalCard";
import Button from "../../components/Button/Button";
import "./styles.css";
import { lionData, zebraData, hippoData, lessonData } from "./data";
import StudyCard from "../../components/StudyCard/StudyCard";

function Lesson03() {
  return (
    <div className="lesson03-wrapper">
      <StudyCard lessonData={lessonData[0]} />
      <StudyCard lessonData={lessonData[1]} /> 
      <Button name="Send" type="submit" />
      <Button name="Get" type="button" />
      <AnimalCard
        animalName={lionData.name}
        animalSpecies={lionData.species}
        animalImg={lionData.image}
      >
        {/* Это значение пропса children */}
        <p>Main character</p>
      </AnimalCard>
      <AnimalCard
        animalName={zebraData.name}
        animalSpecies={zebraData.species}
        animalImg={zebraData.image}
      >
        <p>Role</p>
        <h4>{zebraData.role}</h4>
      </AnimalCard>
      <AnimalCard
        animalName={hippoData.name}
        animalSpecies={hippoData.species}
        animalImg={hippoData.image}
      />
    </div>
  );
}

export default Lesson03;
