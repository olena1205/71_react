import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  return (
    <div className="feedback-container">
      <div className="feedback-results-container">
        <div className="like-dislike-container">
          <div className="result">0</div>
          <Button name="LIKE" onClick={() => {}} />
          <Button name="DISLIKE" onClick={() => {}} />
        </div>
      </div>
      <Button name="RESET RESULTS" onClick={() => {}} />
    </div>
  );
}
