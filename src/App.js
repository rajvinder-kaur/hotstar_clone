import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
     <Header/>
     <Home/>
     <Footer/>
    </div>  
    </BrowserRouter>  
  );
}

export default App;
