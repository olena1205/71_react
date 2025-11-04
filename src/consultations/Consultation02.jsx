import Button from "../components/Button/Button";
import "./styles.css";
import { useState } from "react";

function Consultation02() {
  const [greet, setGreet] = useState("ПРИВЕТ");
  const changeName = () => {
    setGreet("ПОКА");
  };

  return (
    <div className="consultation02-wrapper">
      <div className="greet-container">{greet}</div>
      <Button name="ВЫХОД" onClick={changeName} />
    </div>
  );
}

export default Consultation02;
