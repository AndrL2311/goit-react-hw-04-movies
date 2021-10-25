import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./vievs/HomePage";
import MoviesPage from "./vievs/MoviesPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
