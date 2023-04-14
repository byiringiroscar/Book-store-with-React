import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getBooks } from '../../redux/books/booksSlice';

const CardContainer = () => {
  const book = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  console.log(book.books);
  return (
    <div className="card-container">
      {book.loading && <div>Loading ...</div>}
      {!book.loading && book.error ? <div>{book.error}</div> : null}
      {!book.loading && !book.error ? (
        Object.keys(book.books).map((key) => (
          book.books[key].map((bookSingle) => (
            <Card key={bookSingle.title} bookSingle={bookSingle} />
          ))
        ))
      ) : null}
      {/* {books.map((book) => (<Card book={book} key={book.item_id} />))} */}
    </div>
  );
};

const Card = (props) => {
  const { bookSingle } = props;
  return (
    <div className="card">
      <ul>
        <li>
          Book:
          {bookSingle.title}
        </li>
        <li>
          Author:
          {bookSingle.author}
        </li>
      </ul>
      <button
        type="button"
      >
        Remove book
      </button>
    </div>
  );
};
Card.propTypes = {
  bookSingle: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardContainer;
