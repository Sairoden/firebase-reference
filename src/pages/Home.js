import { useState, useEffect } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const ref = collection(db, "books");

      const { docs } = await getDocs(ref);

      let results = docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBooks(results);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}

// 4 ka na
  