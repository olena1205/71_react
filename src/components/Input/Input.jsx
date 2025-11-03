import "./styles.css";

function Input({ name, type, label, placeholder }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
