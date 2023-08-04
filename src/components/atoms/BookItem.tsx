// src/components/atoms/BookItem.tsx
import React from 'react';

interface Book {
  title: string;
  coverImage: string;
  price: number;
  discountRate: number;
}

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const discountedPrice = book.price * (1 - book.discountRate);

  return (
    <div className="book-item">
      <div className="image-container">
        <img src={book.coverImage} alt={book.title} />
      </div>
      <div className="details">
        <h3>{book.title}</h3>
        <div className="prices">
          <p className="discount">{book.discountRate * 100}%</p>
          <p className="price"><span>{book.price}원</span></p>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
