// src/App.tsx
import React from 'react';
import BookListPage from './components/templates/BookListPage';

const App: React.FC = () => {
  return (
    <div className="app">
      <BookListPage />
    </div>
  );
};

export default App;
