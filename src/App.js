import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from './Components/Home';
import Portifolio from './Components/Portifolio';
import Sobre from './Components/Sobre';
import ErrorPage from './Components/ErrorPage';
function App() {
  return (
    <Router>
      <nav className='Navbar'>
        <Link to="/"> Inicial</Link>
        <Link to="Portifolio"> Portifólio</Link>
        <Link to="Evento"> Eventos </Link>
        <div>imagem</div>
        <Link to="Contatos"> Contatos </Link>
        <Link to="Equipe"> Equipe </Link>
        <Link to="Parcerias"> Parcerias </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Portifolio" element={<Portifolio/>} />
        <Route path="/Sobre" element={<Sobre/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App

;


