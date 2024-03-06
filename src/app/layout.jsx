import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./globals.css";

export const metadata = {
  title: "SF Hacks 2024",
  description: "SFSU's 2024 annual hackathon ()",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-sfDarkBlue`}>
        
        <Navbar />
      
        {children}
        
        <Footer />
      </body>
    </html>
  );
}