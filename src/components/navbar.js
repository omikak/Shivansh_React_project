import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/">Library</Link> | 
      <Link to="/product">Product</Link> | 
      <Link to="/inheritance">Inheritance</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;