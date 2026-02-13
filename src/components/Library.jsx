import React from 'react';
import ProductCard from './ProductCard.jsx';

const products = [
  { name: 'Wireless Headphones', price: 129.99, inStock: true },
  { name: 'Mechanical Keyboard', price: 89.99, inStock: false },
  { name: 'Smart Watch', price: 199.99, inStock: true },
];

const Library = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;