import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Greeting/Greeting'
import SongList from "./components/Song/SongList.tsx";
import TaskManager from "./components/TaskManager/TaskManager.tsx";
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Song List</Link></li>
          <li><Link to="/contact">Task Manager</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Greet name="mat" age={"21"}></Greet>} />
        <Route path="/about" element={<SongList></SongList>} />
        <Route path="/contact" element={<TaskManager></TaskManager>} />
      </Routes>
    </Router>
  )
}

export default App
