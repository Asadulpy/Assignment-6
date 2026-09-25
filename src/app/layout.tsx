import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FitLogProvider } from "../context/FitLogContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#111111] text-white">
        <FitLogProvider>
          <Navbar />

          {children}

          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={2500}
            theme="dark"
          />
        </FitLogProvider>
      </body>
    </html>
  );
}