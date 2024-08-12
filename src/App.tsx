
import { Routes, Route } from 'react-router-dom'

import './App.css'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import RecipiesDetails from './pages/RecipiesDetails'


function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/recipes' element={<RecipiesDetails />} />
      </Routes>
    </div>
  )

}

export default App
