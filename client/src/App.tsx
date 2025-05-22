import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Layout from './components/Layout'
import Home from './pages/Home'
import Register from './pages/Register'
import TopCartsPage from './pages/TopCartsPage'
import Races from './pages/Races'
import Leaderboard from './pages/Leaderboard'
import Profile from './pages/Profile'
import RacePage from './pages/RacePage'
import ApplicationPage from './pages/ApplicationPage'
import RaceResultsPage from './pages/RaceResultsPage'
import UserProfilePage from './pages/UserProfile'
import FinishedRacePage from './pages/FinishedRacePage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/carts' element={<TopCartsPage />} />
          <Route path='/races' element={<Races />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/race-page' element={<RacePage />} />
          <Route path='/applications' element={<ApplicationPage/>} />
          <Route path='/race-results' element={<RaceResultsPage />} />
          <Route path='/user-profile' element={<UserProfilePage />} />
          <Route path='/finished-race' element={<FinishedRacePage />} />
          <Route path='/cart-page' element={<CartPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
