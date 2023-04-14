import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getBooks, removeBook } from '../../redux/books/booksSlice';

const CardContainer = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error occurred</p>;
  }
  return (
    <div className="card-container">
      {books.map((book) => (
        <div className="card" key={uuidv4()}>
          <ul>
            <li>
              num item:
              {book.title}
            </li>
            <li>
              Author:
              {book.author}
            </li>
          </ul>
          <button
            type="button"
            id="button"
            className="remove-btn"
            onClick={() => {
              dispatch(removeBook(book.item_id));
            }}
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default CardContainer;
