import React, {FC, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Saved from './components/Saved';
import MovieForm from './components/MovieForm';
import axios from 'axios'
import Movie from './models/Movie';
import MoviesList from './components/MoviesList';

function App() {

  const [moviesList, setMoviesList] = useState<Movie[]>([])

  function updateMoviesList(moviesList: Movie[]){
    if(moviesList){
      setMoviesList(moviesList)
      console.log(moviesList);
      
    } else{
      alert('Nothing found')
    }
  }

  const [savedList, setSavedList] = useState<Movie[]>([])

  function addToSaved(movie: Movie) {
    if (savedList && savedList.find((savedMovie) => savedMovie.imdbID === movie.imdbID)) {
      console.log('dublicated!!!');
    } else {
      setSavedList([...savedList, movie]);
      console.log(savedList);
    }
  }

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage updateMoviesList={updateMoviesList} moviesList={moviesList} addToSaved={addToSaved} />}/>
        <Route path='/saved' element={<Saved savedList={savedList}/>}/>
      </Routes>
    </div>
  );
}

export default App;
