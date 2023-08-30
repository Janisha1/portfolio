import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Busboard from './pages/Busboard'
import PhotoViewer from './pages/PhotoViewer'
import Navbar from './components/Navbar'
import './App.css'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/busboard" element={<Busboard />}/>
        <Route path="/photo-viewer" element={<PhotoViewer />}/>
        <Route path="/projects" element={<Projects />}/>        
      </Routes>
    </Router>
    //Navbar
    //pages

  )
}

export default App
