import React, { useState } from 'react';
import FormBook from './form';
import CardContainer from './card';

const Home = () => {
  const [bookList, setBookList] = useState([
    { title: 'Fight with lion', author: 'Oscar zuba' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
  ]);
  const addBook = (title, author) => {
    const newBookList = [...bookList, { title, author }];
    setBookList(newBookList);
  };
  return (
    <main>
      <h1>Add book</h1>
      <CardContainer bookList={bookList} />
      <FormBook addBook={addBook} />
    </main>
  );
};

export default Home;
