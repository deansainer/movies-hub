import React, {FC} from 'react'
import Movie from '../models/Movie';
import SavedMovieCard from './SavedMovieCard';


interface SavedProps{
  savedList: Movie[];
}

const Saved: FC<SavedProps> = ({savedList}) => {
  return (
    <div>
      <div className='cards'>
        <div className='card_container'>
          {savedList.map((savedMovie: Movie) => (
            <SavedMovieCard savedMovie={savedMovie}/>
          ))}
      </div>
      </div>
    </div>
  )
}

export default Saved