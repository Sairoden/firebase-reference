import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

// firebase imports
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function BookForm() {
  const [newBook, setNewBook] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(newBook);

    const ref = collection(db, "books");

    await addDoc(ref, {
      title: newBook,
      userID: user.uid,
    });

    // uid is a built in from firebase user auth

    setNewBook("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={e => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
