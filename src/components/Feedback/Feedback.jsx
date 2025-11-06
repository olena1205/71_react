import { useState } from "react";


import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const addLike = () => {
    setLikes((prevState) => prevState + 1);
  };

  const addDislike = () => {
    setDislikes((prevState) => prevState + 1);
  };

  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-results-container">
        <div className="like-dislike-container">
          <div className="result">{likes}</div>
          <Button name="LIKE" onClick={addLike} />
        </div>
        <div className="like-dislike-container">
          <div className="result">{dislikes}</div>
          <Button name="DISLIKE" onClick={addDislike} />
        </div>
      </div>
      <Button name="RESET RESULTS" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
