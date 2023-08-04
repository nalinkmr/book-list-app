// src/components/molecules/BookList.tsx
import React, { useState, useEffect } from 'react';
import BookItem from '../atoms/BookItem';
import booksData from '../../data/books';

const BookList: React.FC = () => {
  const itemsPerPage = 10; // Number of books to load per page
  const [books, setBooks] = useState(booksData.slice(0, itemsPerPage));
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrolledToBottom = scrollTop + clientHeight >= scrollHeight;

    if (scrolledToBottom && !loading) {
      setLoading(true);
      // Simulate an API call for loading more data
      setTimeout(() => {
        const nextPage = page + 1;
        const startIndex = (nextPage - 1) * itemsPerPage;
        const endIndex = nextPage * itemsPerPage;
        setBooks((prevBooks) => [...prevBooks, ...booksData.slice(startIndex, endIndex)]);
        setPage(nextPage);
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page]); // Only re-run the effect when the 'page' state changes

  return (
    <div className="book-list">
      <div className="grid-container">
        {books.map((book, index) => (
          <BookItem key={index} book={book} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default BookList;
