import './App.css'

//Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <Sobre/>
      <Portfolio/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
