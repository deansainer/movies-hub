import React, { FC } from 'react';
import Movie from '../models/Movie';
import SavedMovieCard from './SavedMovieCard';
import HistoryMovie from '../models/HistoryMovie';

interface SavedProps {
  savedList: Movie[];
  deleteFromSaved: (movieId: string) => void;
  addToHistory: (movie: HistoryMovie) => void;
}

const Saved: FC<SavedProps> = ({ savedList, deleteFromSaved, addToHistory }) => {
  return (
    <>
      {savedList.length === 0 && (
        <img 
          className="no_results" 
          src="https://i.ibb.co/4RyGhNY/Pngtree-no-result-search-icon-6511543.png" 
          alt="No saved movies found"
        />
      )}
      <div className="saved_cards">
        <div className="card_container">
          {savedList.map((savedMovie) => (
            <SavedMovieCard 
              key={savedMovie.ImdbID} 
              savedMovie={savedMovie} 
              deleteFromSaved={deleteFromSaved} 
              addToHistory={addToHistory} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Saved;
