import './App.css';
import Footer from './components/Footer';
import AboutPage from './pages/About/AboutPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ContactPage from './pages/Contact/ContactPage';



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer />
    
    </BrowserRouter>
  )
}

export default App
