import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import './App.css'
import Projects from './Pages/Projects';

function App() {
  

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
        </Routes>
      <Footer />  
    </Router>
  )
}

export default App
