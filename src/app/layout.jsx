import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./globals.css";

export const metadata = {
  title: "SF Hacks",
  description: "SFSU's annual hackathon ()",
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