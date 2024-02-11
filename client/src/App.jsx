import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './components/Error/Error'
import Player from "./pages/Player";
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="*" element={<Error message="Page not found" />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
