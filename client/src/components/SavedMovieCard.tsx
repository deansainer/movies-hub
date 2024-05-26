import React, {FC, useState} from 'react'
import Movie from '../models/Movie'
import Modal from './Modal'
import HistoryMovie from '../models/HistoryMovie'

interface SavedMovieCardProps{
    savedMovie: Movie,
    deleteFromSaved: (movieId: string) => void;
    addToHistory: (movie: HistoryMovie) => void,
  }

const SavedMovieCard: FC<SavedMovieCardProps> = ({savedMovie, deleteFromSaved, addToHistory}) => {
  const [isModal, setIsModal] = useState(false)
  console.log('Saved movie:', savedMovie);
  
  function changeModalState(){
    setIsModal(!isModal)
  }

  return (
    <>
    {isModal && <Modal changeModalState={changeModalState} savedMovie={savedMovie} deleteFromSaved={deleteFromSaved} addToHistory={addToHistory}/>}
    <div className={`saved_movie_card ${isModal ? 'modal_open' : ''}`}>
        <img onClick={() => deleteFromSaved(savedMovie.imdbID)} className='delete_button' src='https://cdn-icons-png.flaticon.com/128/753/753345.png'/> 
        <img onClick={changeModalState} className='complete_button' src='https://cdn-icons-png.flaticon.com/128/1828/1828640.png'/>
        <img className='saved_movie_poster' src={savedMovie.Poster}/>
        <div className='saved_movie_title'><span>{savedMovie.Title} <span style={{ fontSize: '12px', color: 'grey' }}>{savedMovie.Year}</span></span></div>
      </div>
      </>
  )
}

export default SavedMovieCard