"use client";
// Next JS
import { usePathname } from "next/navigation";
// Components
import { Footer } from "@/_components/organisms/Footer";
import { LandingHeader } from "@/_components/organisms/LandingHeader";
export default function Layout({ children }) {
  //
  const pathname = usePathname();
  return (
    <div className="">
      {pathname === "/" ? <LandingHeader /> : ""}
      {children}
      <Footer />
    </div>
  );
}
