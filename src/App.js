import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import NavigationBar from './components/Navbar';
import moviesData from './components/Movies';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (title, rating, filterType) => {
    let filtered;
    if (filterType === 'title') {
      filtered = movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    } else if (filterType === 'rating') {
      filtered = movies.filter(movie => movie.rating >= rating);
    }
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div>
      <NavigationBar onFilter={handleFilter} />
      <div className="App">
        <div className="container mt-4">
          <h1 className="my-4 pt-3">Mes Films Préférés</h1>
          <AddMovie onAddMovie={handleAddMovie} />  
          <MovieList movies={filteredMovies} />
        </div>
      </div>
    </div>
  );
};

export default App;