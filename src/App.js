import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Productos from './components/Productos/Productos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
          <Navbar />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Productos' element={<Productos/>}/>
        <Route path='Contacto' element={<Contacto/>}/>
      </Routes>
      
          <Footer />

    </BrowserRouter>
  );
}

export default App;
