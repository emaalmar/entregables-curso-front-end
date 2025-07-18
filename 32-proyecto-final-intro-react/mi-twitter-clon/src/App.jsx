
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>

    </>
  )
}

export default App
