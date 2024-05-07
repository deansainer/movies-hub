import React, {FC, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Saved from './components/Saved';
import MovieForm from './components/MovieForm';
import axios from 'axios'
import Movie from './models/Movie';

function App() {

  const [moviesList, setMoviesList] = useState<Movie[]>([])

  function updateMoviesList(moviesList: Movie[]){
    setMoviesList(moviesList)
    console.log(moviesList);
    
  }

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/saved' element={<Saved/>}/>
      </Routes>
      <MovieForm updateMoviesList={updateMoviesList} />
    </div>
  );
}

export default App;
