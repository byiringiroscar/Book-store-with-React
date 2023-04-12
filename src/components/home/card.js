import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../../redux/books/booksSlice';

const CardContainer = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <div className="card-container">
      {books.map((book) => (<Card book={book} key={book.title} />))}
    </div>
  );
};

const Card = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <div className="card">
      <ul>
        <li>
          Book:
          {book.title}
        </li>
        <li>
          Author:
          {book.author}
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(book.item_id));
        }}
      >
        Remove book
      </button>
    </div>
  );
};

Card.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardContainer;
