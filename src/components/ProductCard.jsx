export default function ProductCard({ title, price, inStock }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 w-64 hover:shadow-xl transition">
      <div className="h-36 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
        <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-700 font-medium mt-1">₹ {price}</p>

      <span
        className={`inline-block mt-4 px-4 py-1 text-sm rounded-full font-semibold
        ${
          inStock
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}
