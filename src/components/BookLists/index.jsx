import React from "react";
import PropTypes from "prop-types";

BookLists.propTypes = {
  books: PropTypes.array,
};
BookLists.defaultProps = {
  books: [],
};

function BookLists(props) {
  const { books, index } = props;

  return (
    <table>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Genre</th>
          <th>Action</th>
        </tr>
        {books.map((book) => (
          <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publisher}</td>
            <td>{book.genre}</td>
            <td>Detail</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookLists;
