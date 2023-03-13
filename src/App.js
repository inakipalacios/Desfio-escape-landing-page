import './App.css';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import Hero from './componentes/Hero';
import Menu from './componentes/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Hero />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
