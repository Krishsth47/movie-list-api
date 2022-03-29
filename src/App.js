import { useState } from "react";

import { Alert, Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/card/CustomCard";
import { SearchForm } from "./components/form/SearchForm";
import { MovieList } from "./components/movie-list/MovieList";
import { Title } from "./components/title/Title";
import { fetchMovie } from "./helper/axiosHelper";

export const App = () => {
  const [movieMainList, setMovieMainList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});

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
      setMovieMainList([...setMovieList, obj]);
      setMovie({});
    } else {
      alert("movie already exists");
    }
  };
  const handleOnDelete = (imdbID) => {
    const filteredList = movieList.filter((itm) => itm.imdbID !== imdbID);
    setMovieList(filteredList);
    setMovieMainList(filteredList);
  };
  // console.log(obj);

  const handleOnSelect = (cat) => {
    let filterArgs = [];
    if (cat) {
      filterArgs = movieMainList.filter((itm) => itm.cat === cat);
    } else {
      filterArgs = movieMainList;
    }

    setMovieList(filterArgs);
    //happy selected
    //lazy selected
    //all selected
  };

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
        <MovieList
          movieList={movieList}
          handleOnDelete={handleOnDelete}
          handleOnSelect={handleOnSelect}
        />
      </Container>
    </div>
  );
};

export default App;
