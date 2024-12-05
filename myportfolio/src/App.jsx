import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

import NavBar from './Components/NavBar';
import './App.css'

function App() {
  

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        </Routes>
    </Router>
  )
}

export default App
