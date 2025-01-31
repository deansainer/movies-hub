import React, {FC, useState} from 'react'
import axios from 'axios'
import Movie from '../models/Movie'


interface MovieFormProps {
    updateMoviesList: (moviesList: Movie[]) => void;
}


const MovieForm: FC<MovieFormProps> = ({updateMoviesList}) => {

    const [movieName, setMovieName] = useState<string>('')

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovieName(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(movieName){
            const response = await axios.get<any>(`https://www.omdbapi.com/?s=${movieName}&apikey=57ef9345`)
            const searchArray = response.data.Search
            updateMoviesList(searchArray)
            setMovieName('')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='movie_form_container'>
            <div className='movie_form'>
                <input name='title' type='text' placeholder='Inception' value={movieName} onChange={handleOnChange}/>
                <button type='submit'>Search</button>
            </div>
        </div>
    </form>
  )
}

export default MovieForm