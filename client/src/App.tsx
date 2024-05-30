import React, {FC, useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Saved from './components/Saved';
import Movie from './models/Movie';
import HistoryMovie from './models/HistoryMovie';
import HistoryPage from './components/HistoryPage';
import axios from 'axios';
function App() {

  // main page
  const [moviesList, setMoviesList] = useState<Movie[]>([])

  function updateMoviesList(moviesList: Movie[]){
    if(moviesList){
      setMoviesList(moviesList)
      console.log(moviesList);
      
    } else{
      alert('Nothing found')
    }
  }

  // saved
  const [savedList, setSavedList] = useState<Movie[]>([])

  async function getSavedList(){
    const response = await axios.get('http://localhost:3001/api/saved')
    setSavedList(response.data)    
  }

  useEffect(() => {
    getSavedList()
  }, [])

  async function addToSaved(movie: Movie) {
    if (savedList && savedList.find((savedMovie) => savedMovie.imdbID === movie.imdbID)) {
      console.log('dublicated!!!');
    } else {
      const response = await axios.post('http://localhost:3001/api/saved/add', {
        Title: movie.Title,
        Year: movie.Year,
        imdbID: movie.imdbID,
        Type: movie.Type,
        Poster: movie.Poster
      })
      getSavedList()
      console.log('Movie saved succesfully');
    }
  }


  async function deleteFromSaved(movieId: string){
    if(movieId){
      const response = await axios.delete(`http://localhost:3001/api/saved/delete/${movieId}`)
      getSavedList()
      console.log('Item deleted successfully');
    } else {
      console.log('No movie ID');
      
    }
  }

  //history
  const [historyList, setHistoryList] = useState<HistoryMovie[]>([])

  async function getHistoryMovies() {
    const response = await axios.get('http://localhost:3001/api/history')
    setHistoryList(response.data)
  }

  useEffect(() => {
    getHistoryMovies()
  }, [])

  async function addToHistory(movie: HistoryMovie){
    if(historyList.find((historyMovie) => historyMovie.imdbid === movie.imdbid)){
      deleteFromSaved(movie.imdbid)
      console.log('dublicated history movie!!');
    } else {
      const response = await axios.post('http://localhost:3001/api/history/add', {
        Title: movie.title,
        Year: movie.year,
        imdbID: movie.imdbid,
        Type: movie.type,
        Poster: movie.poster,
        rating: movie.rating
    })
      deleteFromSaved(movie.imdbid)
      getHistoryMovies()
    }
  }

  async function deleteFromHistory(movieId: string){
    if(movieId){
      const response = await axios.delete(`http://localhost:3001/api/history/delete/${movieId}`)
      console.log('Item deleted successfully');
      getHistoryMovies()
    } else {
      console.log('No movie ID');
    }
  }

  return (
    <>
      <Navbar updateMoviesList={updateMoviesList}/>
      <Routes>
        <Route path='/' element={<HomePage updateMoviesList={updateMoviesList} moviesList={moviesList} addToSaved={addToSaved} />}/>
        <Route path='/saved' element={<Saved savedList={savedList} deleteFromSaved={deleteFromSaved} addToHistory={addToHistory}/>}/>
        <Route path='/history' element={<HistoryPage historyList={historyList} deleteFromHistory={deleteFromHistory}/>}/>
      </Routes>
    </>
  );
}

export default App;
