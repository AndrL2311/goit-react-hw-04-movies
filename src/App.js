import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Стаический импорт
// import HomePage from "./vievs/HomePage";
// import MoviesPage from "./vievs/MoviesPage";
// import MovieDetailsPage from "./vievs/MovieDetailsPage";

// Динамический импорт
const HomePage = lazy(() =>
  import("./vievs/HomePage.jsx" /* webpackChunkName: "home-vievs" */)
);
const MoviesPage = lazy(() =>
  import("./vievs/MoviesPage.jsx" /* webpackChunkName: "movies-page-vievs" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./vievs/MovieDetailsPage.jsx" /* webpackChunkName: "movies-details-page-vievs" */
  )
);

function App() {
  // console.log(fetchTrending(1));

  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<h1>Download...</h1>}>
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
      </Suspense>
      <ToastContainer autoClose={3000} theme={"colored"} />
    </div>
  );
}

export default App;
