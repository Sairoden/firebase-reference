// firebase imports
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export const useLogout = () => {
  const logout = async () => {
    try {
      await signOut(auth);

      console.log("User signed out");
    } catch (err) {
      console.error(err.message);
    }
  };

  return { logout };
};
