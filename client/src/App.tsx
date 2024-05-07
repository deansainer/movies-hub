import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Saved from './components/Saved';
import MovieForm from './components/MovieForm';
import axios from 'axios'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/saved' element={<Saved/>}/>
      </Routes>
      <MovieForm/>
    </div>
  );
}

export default App;
