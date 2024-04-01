import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'; // Remove curly braces
import About from './pages/about/About'; // Remove curly braces
import Products from './pages/products/Products'
import Contact from './pages/contact/Contact'
import Navmenu from './components/navmenu/Navmenu';


import './index.css'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navmenu />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
