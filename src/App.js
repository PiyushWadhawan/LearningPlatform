import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home';
import NavbarMobile from './components/NavbarMobile';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
      <NavbarMobile/>
    </div>
  );
}

export default App;
