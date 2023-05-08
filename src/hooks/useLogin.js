import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

// firebase imports
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { setUser } = useAuthContext();

  const login = async (email, password) => {
    setError(null);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      setUser(res.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return { error, login };
};
