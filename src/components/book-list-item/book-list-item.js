import React from 'react';

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <>
      <h2>{title}</h2>
      <h3>{author}</h3>
    </>
  );
};

export default BookListItem;
