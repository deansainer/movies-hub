import React, { FC } from 'react';
import Movie from '../models/Movie';
import MovieCard from './MovieCard';

interface MoviesListProps {
  moviesList: Movie[];
  addToSaved: (movie: Movie) => void;
}

const MoviesList: FC<MoviesListProps> = ({ moviesList, addToSaved }) => {
  return (
    <div className="cards">
      <div className="card_container">
        {moviesList.map((movie) =>
          !movie.Poster || movie.Poster === 'N/A' ? null : (
            <MovieCard key={movie.imdbID} movie={movie} addToSaved={addToSaved} />
          )
        )}
      </div>
    </div>
  );
};

export default MoviesList;
