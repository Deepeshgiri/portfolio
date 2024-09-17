

import Images from './components/Images';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';
import UnderConstruction from './components/underconstruction/UnderConstruction';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
   <Header />
   
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
