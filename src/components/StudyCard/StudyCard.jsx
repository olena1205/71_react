import Button from "../Button/Button";
import "./styles.css";

function StudyCard({ lessonData }) {
  return (
    <div className="study-card-wrapper">
      <h3>Lesson {lessonData.lesson_number}</h3>
      <p>{lessonData.topic}</p>
      <p>{lessonData.name}</p>
      <img src={lessonData.imgSrc} />
      <Button name="View" type="button" />
    </div>
  );
}

// Экспорт по умолчанию
// Его можно сделать только 1 раз, т.е. только для одной ф-ции, компонента, объекта...
// При импорте мы можем менять название элемента, который мы импортируем (в файле с импортом)
export default StudyCard;
