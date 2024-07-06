import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieRecommendations from './MovieRecommendations';
import SearchBar from './SearchBar';
import moviesData from './movieData';
import './MovieRecommendationPage.css';

const MovieRecommendationPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data and movies after logging in
    // const fetchUserData = async () => {
    //   const userId = 'user-id-here'; // Replace with actual user ID
    //   const response = await fetch(`http://localhost:5000/api/user/${userId}/movies`);
    //   const data = await response.json();
    //   setMovies(data.movies);
    // };
    // fetchUserData();
  }, []);

  const searchMovies = (query) => {
    const results = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log(results);
    setSearchResults(results);
    // if (results.length > 0) {
    //   recommendMovies(results[0].genre);
    // } else {
    //   setRecommendations([]);
    // }
    setRecommendations(results)
    // console.log(query,"hth");
  };

  const recommendMovies = (genre) => {
    const results = movies.filter(movie =>
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
    setRecommendations(results);
  };

  return (
    <div className="movie-recommendation-page">
      <SearchBar searchMovies={searchMovies} />
      <MovieRecommendations recommendations={recommendations} />
      {/* <MovieList movies={searchResults.length ? searchResults : movies} /> */}
    </div>
  );
};

export default MovieRecommendationPage;
