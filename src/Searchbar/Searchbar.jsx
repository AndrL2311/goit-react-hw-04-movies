import { useState } from "react";
// import { toast } from "react-toastify";

import s from "./Searchbar.module.css";

function Searchbar({ onSubmit }) {
  const [movieName, setMovieName] = useState("");

  const handleNameChange = (event) =>
    setMovieName(event.currentTarget.value.toLowerCase());

  const handleSubmit = (event) => {
    event.preventDefault();
    if (movieName.trim() === "") {
      console.log("Enter movie name.");
      // toast.error("Enter image name.");
      return;
    }

    // Проп который передается форме для вызова при сабмите
    onSubmit(movieName);
    // Сбрасываем значение input
    reset();
  };

  const reset = () => {
    setMovieName("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s["SearchForm-button"]}>
          <span className={s["SearchForm-button-label"]}>Search</span>
        </button>

        <input
          className={s["SearchForm-input"]}
          type="text"
          autoComplete="off"
          autoFocus
          name="movieName"
          value={movieName}
          placeholder="Search movie"
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

export default Searchbar;
