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

  async function getSavedList(){
    const response = await axios.get('http://localhost:3001/movies/saved')
    setSavedList(response.data)    
  }

  useEffect(() => {
    getSavedList()
  }, [])


  async function addToSaved(movie: Movie) {
    if (savedList && savedList.find((savedMovie) => savedMovie.imdbID === movie.imdbID)) {
      console.log('dublicated!!!');
    } else {
      const response = await axios.post('http://localhost:3001/movies/post', {
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

  const [historyList, setHistoryList] = useState<HistoryMovie[]>([])

  async function deleteFromSaved(movieId: string){
    if(movieId){
      const newSavedList = savedList.filter((savedMovie) => savedMovie.imdbid !== movieId)
      setSavedList(newSavedList)
      const response = await axios.delete(`http://localhost:3001/movies/saved/delete/${movieId}`)
      console.log('item deleted');
    } else {
      console.log('No movie id');
      
    }
  }

  async function addToHistory(movie: HistoryMovie){
    if(historyList.find((historyMovie) => historyMovie.imdbid === movie.imdbid)){
      console.log('dublicated history movie!!');
    } else {
      const response = await axios.post('http://localhost:3001/movies/addToHistory', {
        Title: movie.title,
        Year: movie.year,
        imdbID: movie.imdbid,
        Type: movie.type,
        Poster: movie.poster,
        rating: movie.rating
    })
      setHistoryList([...historyList, movie])
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
