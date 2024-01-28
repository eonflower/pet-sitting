import { Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Rates from './pages/Rates'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <div className="app app-container">
      <Nav />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/rates" element={<Rates />} />
        <Route path ="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
