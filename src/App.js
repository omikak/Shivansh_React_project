import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // import the Navbar
import Library from './components/Library';
import Inheritance from './components/Inheritance';
import ProductCard from './components/ProductCard';

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/inheritance" element={<Inheritance />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;