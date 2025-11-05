import { v4 } from "uuid";

import "./styles.css";
import { animalsData } from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";

function Lesson05() {
  // Метод map возвращает новый массив на основе массива, для которого мы вызывали метод с таким же
  // количеством элементов как в исходном массиве
  // !Важно - в callback ф-ции, которую мы передаем в map должен быть возврат
  // В результате переменной animalCards будет храниться массив элементов JSX(компонентов)
  const animalCards = animalsData.map((animal, index, array) => {
    return (
      <div className="card-wrapper" key={v4()}>
        <div>{index + 1}</div>
        <AnimalCard
          //  key={item.id}
        //   key={v4()}
          animalName={animal.name}
          animalSpecies={animal.species}
          animalImg={animal.image}
        />
      </div>
    );
  });

  console.log(animalCards);

  return (
    <div className="lesson05-wrapper">
      {/* <AnimalCard
        animalName={animalsData[0].name}
        animalSpecies={animalsData[0].species}
        animalImg={animalsData[0].image}
      /> */}
      {animalCards}
    </div>
  );
}

export default Lesson05;
