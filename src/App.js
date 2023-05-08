import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

// components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={!user ? <Navigate to="/login" /> : <Home />}
        />
        <Route
          exact
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
