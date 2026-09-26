import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';
import Inicio from './componentes/Inicio'
import Coleccion from './componentes/Coleccion';
import Favoritos from './componentes/Favoritos';
import Informativa from './componentes/Informativa';
import Usuario from './componentes/Usuario';
import Pokemon from './componentes/Pokemon';

function App() {
  return (
    <>
    <Router>
        <nav className='c-menu'>
          <Link to="/">Inicio</Link>
          <Link to="/Coleccion">Coleccion</Link>
          <Link to="/Favoritos">Favoritos</Link>
          <Link to="/Informativa">Informativa</Link>
          <Link to="/Usuario">Usuario</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/Coleccion" element={<Coleccion />} />
          <Route path="/Informativa" element={<Informativa />} />
          <Route path="/Usuario" element={<Usuario />} />
          <Route path="/Pokemon/:name" element={<Pokemon />} />
        </Routes>
      </Router>
       </>


       
  )
}

export default App