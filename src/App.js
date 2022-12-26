import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Pocetna from './components/Pocetna';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Pocetna></Pocetna>}></Route>
            /* ovde se posle dodaju rute za Restorane i omiljene*/
          </Routes>
       </BrowserRouter>
       <Footer></Footer>
    </div>
  );
}

export default App;
