import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <div className="w-full h-[1px] bg-border" />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
