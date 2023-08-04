// src/components/templates/BookListPage.tsx
import React from 'react';
import RefreshControl from '../atoms/RefreshControl';
import BookList from '../molecules/BookList';

const BookListPage: React.FC = () => {
  const handleRefresh = () => {
    // Simulate a refresh action here and reload the data from the server
    console.log('Refreshing...');
    // You can call an API or update the data here
  };

  return (
    <div className="book-list-page">
      <h5>BOOK LIST PAGE</h5>
      <div className="header">Books</div>
      {/* <RefreshControl onRefresh={handleRefresh} /> */}
      <BookList />
    </div>
  );
};

export default BookListPage;
