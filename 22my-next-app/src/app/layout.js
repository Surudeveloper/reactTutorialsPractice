import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/Header";
import Menu from "@/Menu";
import Footer from "@/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function NIT({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
};
