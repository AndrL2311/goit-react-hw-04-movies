import Navigation from "../Navigation/Navigation";
import s from "./AppBar.module.css";

function Appbar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}

export default Appbar;
