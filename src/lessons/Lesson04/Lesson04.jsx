import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";
import "./styles.css";


function Lesson04() {
  const showMessage = () => {
    alert("Outer function");
  };

  const showMessageWithName = (name) => {
    alert(`Outer function click - ${name}`);
  };

  return (
    <div className="lesson04-wrapper">
      <Counter />
      <div className="button-container">
        {/* Пример 1- создание ф-ции внутри onClick(анонимная ф-ция) */}
        <Button
          name="Inner func"
          onClick={() => {
            alert("Inner function");
          }}
        />
        {/* Пример 2- создание ф-ции вне кнопки и передача переменной в prop */}
        <Button name="Outer func" onClick={showMessage} />
        {/* Пример 3 - создание ф-ции вне кнопки с параметрами */}
        <Button
          name="Func with param"
          onClick={() => {
            showMessageWithName("Bob");
          }}
        />
      </div>
    </div>
  );
}
export default Lesson04;
