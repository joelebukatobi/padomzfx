"use client";
// Next JS
import { usePathname } from "next/navigation";
// Components
import { Footer } from "@/_components/organisms/Footer";
import { LandingHeader } from "@/_components/organisms/LandingHeader";
import TradingViewWidget from "../_components/organisms/TradingView";
export default function Layout({ children }) {
  //
  const pathname = usePathname();
  return (
    <div className="">
      <TradingViewWidget />
      {pathname === "/" ? <LandingHeader /> : ""}
      {children}
      <Footer />
    </div>
  );
}
