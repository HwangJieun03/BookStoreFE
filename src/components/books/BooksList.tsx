import { styled } from 'styled-components';
import BookItem from './BookItem';
import { Book } from '../../models/book.model';

const dummyBook: Book = {
    id: 1,
    title: "Dummy Book",
    img: 5,
    category_id: 1,
    form: "paperback",
    author: "Dummy Author",
    isbn: "Dummy ISBN",
    pages: 100,
    summary: "Dummy Summary",
    detail: "Dummy Detail",
    contents: "Dummy Contents",
    price: 10000,
    likes: 1,
    pubDate: "2021-01-01"
}

function BooksList() {
  return (
    <BooksListStyle>
      <BookItem book={dummyBook}/>
    </BooksListStyle>
  );
};

const BooksListStyle = styled.div`
  
`;

export default BooksList;