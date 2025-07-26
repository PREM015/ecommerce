// ✅ File: client/src/App.jsx

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layout/MainLayout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  // ✅ user state to track logged-in user
  const [user, setUser] = useState(() => {
    // On reload, try to get user from localStorage
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard user={user} />
              </PrivateRoute>
            }
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
