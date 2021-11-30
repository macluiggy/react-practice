import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// const elements = ['item1', 'item2', 'item3']
const ReactRouter1 = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        {/* Switch seria como el mapa de una zona, Link seria como los destinos a donde se quiere llegar y Route serian las rutas que hay que tomar para llegar a ese destino, y el to y el path tienen que ser iguales para que asi la ruta x tome el destino hacia x */}
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default ReactRouter1