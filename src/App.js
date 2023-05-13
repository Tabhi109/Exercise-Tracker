import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Routes>
        <Route path='/' element={<ExercisesList/>}/>
        <Route path='/create' element={<CreateExercise/>}/>
        <Route path='/user' element={<CreateUser/>} />
        <Route path='/edit/:id' element={<EditExercise/>}/>
      </Routes>
    </Router>
  );
}

export default App;
