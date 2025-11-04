// импортируем компонент Button для его дальнейшего использования
// import Button from "./components/Button/Button";

// Импорты лекций
import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson03 from "./lessons/Lesson03/Lesson03";
import Lesson04 from "./lessons/Lesson04/Lesson04";

// Импорты домашних работ
import Homework03 from "./homeworks/Homework03/Homework03";

function App() {
  return (
    <>
      {/* Лекция 2 */}
      {/* <Lesson02/> */}
      
      {/* Лекция 3 */}
      {/* <Lesson03 /> */}

      {/* Лекция 4 */}
      <Lesson04 />
    </>
  );
}

export default App;
