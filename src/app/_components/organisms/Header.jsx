"use client";
//
// Next
// Components
import { Navbar } from "@/_components/organisms/Navbar";

export const Header = ({ children }) => {
  return (
    <header className="header">
      <Navbar />
      {children}
    </header>
  );
};
