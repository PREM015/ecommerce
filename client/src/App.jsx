import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";  
import MainLayout from "./layout/MainLayout";
import PrivateRoute from "./components/PrivateRoute"; // Import your PrivateRoute component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
