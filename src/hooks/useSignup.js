import { useState } from "react";

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = async (email, password) => {
    setError(null);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      console.log("User signed up:", res.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return { error, signup };
};
