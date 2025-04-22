import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useBook } from "../hooks/useBook";

function BookDeatil() {
  const { bookId } = useParams();
  const {book} = useBook(bookId);

  if (!book) return null;

  return <BookDeatilStyle>{book.title}</BookDeatilStyle>;
}

const BookDeatilStyle = styled.div``;

export default BookDeatil;
