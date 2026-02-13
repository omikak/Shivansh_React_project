import { useState } from "react";

export default function Library() {
  const [books, setBooks] = useState([
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (!title || !author) return;
    setBooks([...books, { title, author }]);
    setTitle("");
    setAuthor("");
  };

  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-16 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Library Management System
        </h2>

        <input
          className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

       <div className="flex flex-wrap gap-2 mb-4">

          <input
            className="border rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            onClick={addBook}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg"
          >
            Add
          </button>
        </div>

        {filteredBooks.length === 0 && (
          <p className="text-center text-gray-500 text-sm">
            No books found
          </p>
        )}

        {filteredBooks.map((book, index) => (
          <div
            key={index}
            className="flex justify-between items-center border rounded-xl p-4 mb-3"
          >
            <div>
              <p className="font-semibold text-gray-800">{book.title}</p>
              <p className="text-sm text-gray-600">by {book.author}</p>
            </div>
            <button
              onClick={() => removeBook(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}