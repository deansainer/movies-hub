import React, { useState, FC } from 'react';
import Movie from '../models/Movie';
import HistoryMovie from '../models/HistoryMovie';

interface ModalProps {
  changeModalState: () => void;
  savedMovie: Movie;
  deleteFromSaved: (movieId: string) => void;
  addToHistory: (movie: HistoryMovie) => void;
}

const Modal: FC<ModalProps> = ({ changeModalState, savedMovie, deleteFromSaved, addToHistory }) => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (index: number): void => {
    setRating(index + 1);
  };

  const modalSubmit = (): void => {
    const completedMovie: HistoryMovie = { ...savedMovie, rating };
    changeModalState();
    addToHistory(completedMovie);
    deleteFromSaved(savedMovie.imdbid); // перевір, що поле `imdbid` існує в `Movie`
    console.log(completedMovie);
  };

  return (
    <div className="modal_overlay">
      <div className="modal_window">
        <div>
          <span className="rate_movie_label">Rate this movie</span>
        </div>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < rating ? 'active' : ''}`}
              onClick={() => handleStarClick(index)}
            >
              ★
            </span>
          ))}
        </div>
        <button className="modal_button" onClick={modalSubmit}>
          Complete
        </button>
        <img
          onClick={changeModalState}
          className="delete_button"
          src="https://cdn-icons-png.flaticon.com/128/753/753345.png"
          alt="Close"
        />
      </div>
    </div>
  );
};

export default Modal;
