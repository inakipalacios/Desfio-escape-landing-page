import './App.css';
import "./hojas-de-estilo/todoCSS.css";
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import Hero from './componentes/Hero';
import Menu from './componentes/Menu';
import Provincia from './componentes/Provincia';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <div class="container text-center contenedor-provincias">
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <a className='enlace_provincia' href='#'>
              <h3 className='nombre_provincia'>Araba</h3>
              <Provincia imagen="araba"/>
            </a>
          </div>
          <div class="col-lg-4 col-sm-12">
            <a className='enlace_provincia' href='#'>
              <h3 className='nombre_provincia'>Bizkaia</h3>
              <Provincia imagen="bizkaia"/>
            </a>
          </div>
          <div class="col-lg-4 col-sm-12">
            <a  className='enlace_provincia'href='#'>
              <h3 className='nombre_provincia'>Gipuzkoa</h3>
              <Provincia imagen="gipuzkoa"/>
            </a>
          </div>
        </div>
      </div>
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
