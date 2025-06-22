import React from "react";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;
