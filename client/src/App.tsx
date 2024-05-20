import React, {FC, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Saved from './components/Saved';
import Movie from './models/Movie';
import HistoryMovie from './models/HistoryMovie';
import HistoryPage from './components/HistoryPage';

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

  const [historyList, setHistoryList] = useState<HistoryMovie[]>([])

  function deleteFromSaved(movieId: string){
    const newSavedList = savedList.filter((savedMovie) => savedMovie.imdbID !== movieId)
    setSavedList(newSavedList)
  }

  function addToHistory(movie: HistoryMovie){
    if(historyList.find((historyMovie) => historyMovie.imdbID === movie.imdbID)){
      console.log('dublicated history movie!!');
    } else {
      setHistoryList([...historyList, movie])
      console.log(historyList);
    }
  }

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage updateMoviesList={updateMoviesList} moviesList={moviesList} addToSaved={addToSaved} />}/>
        <Route path='/saved' element={<Saved savedList={savedList} deleteFromSaved={deleteFromSaved} addToHistory={addToHistory}/>}/>
        <Route path='/history' element={<HistoryPage historyList={historyList}/>}/>
      </Routes>
    </>
  );
}

export default App;
