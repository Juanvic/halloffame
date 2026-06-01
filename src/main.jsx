import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import Halloffame from './pages/Halloffame.jsx'
import Footer from './components/shared/Footer.jsx'
import Header from './components/shared/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Halloffame />
    <Footer />
  </StrictMode>,
)
