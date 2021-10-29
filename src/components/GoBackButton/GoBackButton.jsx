import s from "./GoBackButton.module.css";

function GoBackButton({ onGoBack }) {
  return (
    <button type="button" className={s.button} onClick={onGoBack}>
      Go Back
    </button>
  );
}

export default GoBackButton;
