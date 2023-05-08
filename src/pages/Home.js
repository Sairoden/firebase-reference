import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../context/AuthContext";

export default function Home() {
  const { documents: books } = useCollection("books");
  const { user } = useAuthContext();

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
      <h1>Hello {user && user.email}</h1>
    </div>
  );
}

// 4 ka na
