import { Container } from "react-bootstrap";
import "./App.css";
import { SearchForm } from "./components/form/SearchForm";
import { MovieList } from "./components/movie-list/MovieList";
import { Title } from "./components/title/Title";

export const App = () => {
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm />
        <hr />
        <MovieList />
      </Container>
    </div>
  );
};

export default App;
