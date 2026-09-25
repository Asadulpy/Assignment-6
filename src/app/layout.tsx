import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FitLogProvider } from "../context/FitLogContext";

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
        </FitLogProvider>
      </body>
    </html>
  );
}