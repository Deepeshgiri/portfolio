import './index.css';
import Header from './components/layout/Header';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/layout/Footer';
import PageNotFound from './components/underconstruction/PageNotFound';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className='App min-h-screen'>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;