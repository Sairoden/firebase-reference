import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { setUser } = useAuthContext();

  const signup = async (email, password) => {
    setError(null);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      setUser(res.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return { error, signup };
};
