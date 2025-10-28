import './App.css'
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Authentication/Login';
import SignUp from './pages/Authentication/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import TicketsPage from './pages/TicketManagement/TicketsPage';




function App() {
  

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ticketsPage" element={<TicketsPage />} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
