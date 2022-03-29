import { useState } from "react";

import { Alert, Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/card/CustomCard";
import { SearchForm } from "./components/form/SearchForm";
import { MovieList } from "./components/movie-list/MovieList";
import { Title } from "./components/title/Title";
import { fetchMovie } from "./helper/axiosHelper";

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});
  const [category, setCategory] = useState("");

  const getMovie = async (search) => {
    const movie = await fetchMovie(search);
    console.log(movie);
    setMovie(movie.data);
  };

  const handleOnAddToList = (cat, movie) => {
    //cat-category
    const obj = { ...movie, cat };

    //adding first time
    !movieList.length && setMovieList([obj]);
    // movieList.length === 0 && setMovieList([obj]); //same way to write as above line
    //adding after first time
    const isExist = movieList.find((item) => item.imdbID === movie.imdbID);

    if (!isExist) {
      setMovieList([...movieList, obj]);
      setMovie({});
    } else {
      alert("movie already exists");
    }
  };
  const handleOnDelete = (imdbID) => {
    const filteredList = movieList.filter((itm) => itm.imdbID !== imdbID);
    setMovieList(filteredList);
  };
  // console.log(obj);

  const moviesToDisplay = category
    ? movieList.filter((item) => item.cat === category)
    : movieList;

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm handleOnAddToList={handleOnAddToList} getMovie={getMovie} />
        <div className="d-flex justify-content-center mt-3">
          {movie.Response === "True" && (
            <CustomCard movie={movie} fun={handleOnAddToList} />
          )}
          {movie.Response === "False" && (
            <Alert variant="danger">{movie.Error}</Alert>
          )}
        </div>
        <hr />
        {category || "All"} selected
        <MovieList
          movieList={moviesToDisplay}
          handleOnDelete={handleOnDelete}
          setCategory={setCategory}
        />
      </Container>
    </div>
  );
};

export default App;
