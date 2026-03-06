import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingUI from './components/FloatingUI';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Class from './pages/Class';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-[#176B36] selection:text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/class" element={<Class />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingUI />
      </div>
    </Router>
  );
}
