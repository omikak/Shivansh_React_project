import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import Library from './components/Library';
import Inheritance from './components/Inheritance';
import ProductCard from './components/ProductCard';

// Optional: Placeholder components
function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Routes>
      {/* Main pages */}
      <Route path="/" element={<Library />} />
      <Route path="/inheritance" element={<Inheritance />} />
      <Route path="/product" element={<ProductCard />} />

      {/* Optional pages */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;