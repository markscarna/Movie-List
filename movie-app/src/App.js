import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OffcanvasNavbar from "./components/Navbar";
import Movies from "./components/Movies";
import MovieContext from "./components/MovieContext";
import { SplashPage } from "./components/SplashPage";
import { AddMovie } from "./components/AddMovie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  const URL = "http://localhost:8080/movies";
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const movieObj = { movies, setMovies, searchMovie, setSearchMovie };

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, [searchMovie]);

  if (movies.length > 0) {
    return (
      <MovieContext.Provider value={movieObj}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={[<OffcanvasNavbar movies={movies} />, <SplashPage />]}
            />
            <Route
              path="/search"
              element={[
                <OffcanvasNavbar movies={movies} />,
                <Movies movies={movies} />,
              ]}
            />
            <Route
              path="/movies"
              element={[
                <OffcanvasNavbar movies={movies} />,
                <Movies movies={movies} />,
              ]}
            />
            <Route
              path="/addmovie"
              element={[<OffcanvasNavbar movies={movies} />, <AddMovie />]}
            />
          </Routes>
        </Router>
      </MovieContext.Provider>
    );
  }
}

export default App;
