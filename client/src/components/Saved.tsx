import React, {FC} from 'react'
import Movie from '../models/Movie';

interface SavedProps{
  savedList: Movie[];
}

const Saved: FC<SavedProps> = ({savedList}) => {
  return (
    <div>
      {savedList.map((savedMovie) => (
        <img src={savedMovie.Poster}/>
      ))}
    </div>
  )
}

export default Saved