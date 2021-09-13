import React, { useEffect, useState } from "react";
import bookApi from "../../../../api/bookApi";
import BookLists from "../../../../components/BookLists";

BookList.propTypes = {};

function BookList(props) {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const params = {
      _limit: 10,
    };
    const fetchBookList = async () => {
      const bookData = await bookApi.getAll(params); //do lúc đầu mình getAll nó ra một cái object chứa cả books cả meta nên để console ra một cái mảng thì phải làm như dưới
      console.log(bookData["books"]);
      setBookList(bookData["books"]); //thay đổi initialState từ mảng rỗng sang mảng book
    };
    fetchBookList();
  }, []);

  return (
    <div>
      <h2>Book Feature</h2>
      <h3>Book ListPage</h3>
      <form>
        <input type="text" />
      </form>

      <BookLists books={bookList} />
    </div>
  );
}

export default BookList;
