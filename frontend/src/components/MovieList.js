import React from 'react';
import MovieDetails from './MovieDetails';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
