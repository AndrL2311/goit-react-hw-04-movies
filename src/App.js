import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./vievs/HomePage";
import MoviesPage from "./vievs/MoviesPage";
import MovieDetailsPage from "./vievs/MovieDetailsPage";
// import fetchTrending from "./service/apiService";
import "./App.css";

function App() {
  // console.log(fetchTrending(1));

  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route path="/movies" exact>
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
