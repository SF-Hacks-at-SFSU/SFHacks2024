import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SF Hacks 2024",
  description: "SFSU's 2024 annual hackathon ()",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-sfDarkBlue ${inter.className}`}>
        
        <Navbar />
      
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
