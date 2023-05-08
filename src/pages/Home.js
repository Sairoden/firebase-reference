import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useCollection } from "../hooks/useCollection";

export default function Home() {
  const { documents: books } = useCollection("books");

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
      <h1>Hello</h1>
    </div>
  );
}

// 4 ka na
