import s from "./GoBackButton.module.css";

function GoBackButton({ goBack }) {
  return (
    <button className={s.button} onClick={goBack}>
      Go Back
    </button>
  );
}

export default GoBackButton;
