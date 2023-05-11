import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
    <div className="App">
    <h1 className='h1 bg-dark text-light'>Exercise Tracker</h1>
    </div>
    <Navbar></Navbar>
    <ExercisesList></ExercisesList>
    </Router>
  );
}

export default App;
