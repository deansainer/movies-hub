import React, {FC, useState} from 'react'
import axios from 'axios'
import Movie from '../models/Movie'

const MovieForm: FC = () => {


    const [movieName, setMovieName] = useState<string>('')

    const [moviesList, setMoviesList] = useState<Movie[]>([])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovieName(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(movieName){
            const response = await axios.get<any>(`https://www.omdbapi.com/?s=${movieName}&apikey=57ef9345`)
            const searchArray = response.data.Search
            setMoviesList(response.data.Search)
            console.log(moviesList); 
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className='movie_container'>
            <div className='movie_form'>
                <input name='title' type='text' placeholder='Interstellar' value={movieName} onChange={handleOnChange}/>
                <button type='submit'>Submit</button>
            </div>
        </div>
    </form>
  )
}

export default MovieForm