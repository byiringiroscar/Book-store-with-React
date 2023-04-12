import React from 'react';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  const { bookList } = props;
  return (
    <div className="card-container">
      {bookList.map((book) => (<Card book={book} key={book.title} />))}
    </div>
  );
};

const Card = (props) => {
  const { book } = props;
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
      <button type="button">Remove book</button>
    </div>
  );
};

CardContainer.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Card.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardContainer;
