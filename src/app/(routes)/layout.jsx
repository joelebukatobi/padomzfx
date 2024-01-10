"use client";
// Next JS
import { usePathname } from "next/navigation";
// Components
import { Footer } from "@/_components/organisms/Footer";
import { LandingHeader } from "@/_components/organisms/LandingHeader";
import Script from "next/script";

export default function Layout({ children }) {
  //
  const pathname = usePathname();
  return (
    <div className="">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-LGCLNNBQLK" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-LGCLNNBQLK');
        `}
      </Script>

      {pathname === "/" ? <LandingHeader /> : ""}
      {children}
      <Footer />
    </div>
  );
}
