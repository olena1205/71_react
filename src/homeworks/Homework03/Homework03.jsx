import "./styles.css";
import Button from "../../components/Button/Button";

function Homework03() {
  return (
    <div className="homework03-wrapper">
      <form className="contact-form">
        <Input
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <Button name="Send email" type="submit" />
      </form>
    </div>
  );
}

export default Homework03;
