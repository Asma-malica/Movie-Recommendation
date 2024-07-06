import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-item">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Language:</strong> {movie.language}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Year of Release:</strong> {movie.year}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
    </div>
  );
};

export default MovieDetails;
