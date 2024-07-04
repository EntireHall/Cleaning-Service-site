import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/resources/inc/header";
import Footer from "@/resources/inc/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/slick-theme.css" />
        <link rel="stylesheet" href="/assets/css/icofont.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/dark.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      
      <body className={inter.className}>
      <Header />  
        {children}
      <Footer />
      {/* SCRIPT SECTIONS */}
      <Script src="/assets/js/jquery.min.js"></Script>
      <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/js/owl.carousel.min.js"></Script>
      <Script src="/assets/js/slick.min.js"></Script>
      <Script src="/assets/js/jquery.magnific-popup.min.js"></Script>
      <Script src="/assets/js/meanmenu.js"></Script>
      <Script src="/assets/js/jquery.ajaxchimp.min.js"></Script>
      <Script src="/assets/js/form-validator.min.js"></Script>
      <Script src="/assets/js/contact-form-script.js"></Script>
      <Script src="/assets/js/custom.js"></Script>
      </body>
    </html>
  );
}