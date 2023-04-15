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
    <>
      <div className="card-container">
        {books.map((book) => (
          <div className="card" key={uuidv4()}>
            <div className="book-content">
              <div className="book-info">
                <h4 className="book-category">{book.category}</h4>
                <h2 className="book-title">{book.title}</h2>
                <h6 className="book-author">{book.author}</h6>
                <div className="action-buttons">
                  <button type="button" className="button-outline">Comments</button>
                  <div className="vertical-divider" />
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(removeBook(book.item_id));
                    }}
                    className="button-outline"
                  >
                    Remove

                  </button>
                  <div className="vertical-divider" />
                  <button type="button" className="button-outline">Edit</button>
                </div>
              </div>
              <div className="progress-container">
                <div className="circular-progress-container">
                  <div className="circular-progress" />
                </div>
                <div className="progress-stat">
                  <p className="percent-complete">64%</p>
                  <p className="completed">Completed</p>
                </div>
                <div className="progress-divider" />
                <div className="current-chapter-container">
                  <div>
                    <p className="current-chapter-label">CURRENT CHAPTER</p>
                    <p className="current-chapter">CURRENT CHAPTER</p>
                  </div>
                  <div>
                    <button type="button" className="primary-button">UPDATE PROGRESS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="horizontal-divider" />
    </>
  );
};
export default CardContainer;
