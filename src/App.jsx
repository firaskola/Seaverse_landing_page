// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Research from "./pages/Research"; // Import the Research component
import Technology from "./pages/Technology";
// src/App.jsx
import ResearchDetail from "./components/Research/ResearchDetail"; // Add this import

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-24"> {/* Add padding-top to avoid content overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} /> {/* Use Research component */}
          <Route path="/research/:id" element={<ResearchDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;