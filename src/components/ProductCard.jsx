import React from 'react';

const ProductCard = ({ name, price, inStock }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-60">
      <div className="bg-gray-200 h-40 w-full mb-4 flex items-center justify-center">
        {/* Image placeholder */}
        <span className="text-gray-400">Image</span>
      </div>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-700">${price}</p>
      <span
        className={`mt-2 inline-block px-2 py-1 text-sm rounded-full ${
          inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}
      >
        {inStock ? 'In Stock' : 'Out of Stock'}
      </span>
    </div>
  );
};

export default ProductCard;