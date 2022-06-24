import logo from './logo.svg';
import './App.css';
import  Listar  from "./componentes/Listar";
import Crear from "./componentes/Crear";
import SearchBar from "./componentes/SearchBar";
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";

function App() {
  return (
        <Router>
            <div className="container">
              <nav class="navbar navbar-expand navbar-light bg-light">
                  <div className="nav navbar-nav">
                      <a className="nav-item nav-link active" href="/">Sistema <span className="sr-only">(current)</span></a>
                      <a className="nav-item nav-link" href="Crear">Crear Empleado</a>
                      <a className="nav-item nav-link" href="Buscar">Search</a>
                  </div>
              </nav>
                <Routes>
                <Route path='/' element={<Listar></Listar>}> </Route>
                <Route path='/Crear' element={<Crear></Crear>}> </Route>
                <Route path='/Buscar' element={<SearchBar ></SearchBar>}> </Route>
                </Routes>
            </div>
        </Router>
        );
}

export default App;
