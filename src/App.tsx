import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Busboard from './pages/Busboard'
import PhotoViewer from './pages/PhotoViewer'
import Contact from './pages/Contact'

import './App.css'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/busboard" element={<Busboard />}/>
        <Route path="/photo-viewer" element={<PhotoViewer />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
    //Navbar
    //pages

  )
}

export default App
