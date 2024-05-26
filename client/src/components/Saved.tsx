import React, {FC} from 'react'
import Movie from '../models/Movie';
import SavedMovieCard from './SavedMovieCard';
import HistoryMovie from '../models/HistoryMovie';


interface SavedProps{
  savedList: Movie[],
  deleteFromSaved: (movieId: string) => void,
  addToHistory: (movie: HistoryMovie) => void,
}

const Saved: FC<SavedProps> = ({savedList, deleteFromSaved, addToHistory}) => {
  console.log('Saved items:', savedList);

  return (
    <>
    {savedList.length === 0 ? <img className='no_results' src='https://i.ibb.co/4RyGhNY/Pngtree-no-result-search-icon-6511543.png' alt='Pngtree-no-result-search-icon-6511543' /> : null}
    <div>      
      <div className='saved_cards'>
        <div className='card_container'>
          {savedList.map((savedMovie) => (
            <SavedMovieCard savedMovie={savedMovie} key={savedMovie.imdbID} deleteFromSaved={deleteFromSaved} addToHistory={addToHistory}/>
          ))}
      </div>
      </div>
    </div>
    </>
  )
}

export default Saved