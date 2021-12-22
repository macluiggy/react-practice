import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
// const elements = ['item1', 'item2', 'item3']
const ReactRouter1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        {/* <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul> */}
        <button onClick={() => navigate("/users")}>users</button>
        <button onClick={() => navigate("about")}>about</button>
      </nav>

      {/* Switch seria como el mapa de una zona, Link seria como los destinos a donde se quiere llegar y Route serian las rutas que hay que tomar para llegar a ese destino, y el to y el path tienen que ser iguales para que asi la ruta x tome el destino hacia x */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate("/about")}>about</button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>About</h2>
      <button onClick={() => navigate("/users")}>users</button>
    </div>
  );
}

function Users() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Users</h2>
      <button onClick={() => navigate("/")}>home</button>
    </div>
  );
}
export default ReactRouter1;
