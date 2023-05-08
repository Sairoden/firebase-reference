import { useAuthContext } from "../context/AuthContext";

// firebase imports
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const { setUser } = useAuthContext();

  const logout = async () => {
    try {
      await signOut(auth);

      setUser(null);
    } catch (err) {
      console.error(err.message);
    }
  };

  return { logout };
};
