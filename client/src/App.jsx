import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import TopBar from './components/topbar/TopBar'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/home/Home'
import Single from './components/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  const user = false;

  return (

    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/post/:postId' element={<Single />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
