import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div className=" w-full  mx-auto font-poppins  bg-[#F9FAFC]">
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(100vh-300px)]">

      <Outlet></Outlet>
      </main>
      <footer>

      <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
