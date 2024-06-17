import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./Components/Navigation";

export const metadata = {
  title: "Elysian",
  description: "Elysian Store made with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
