import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Generated A next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{background : "#444" , display : "flex" , justifyContent : "center" , alignItems : "center" , }}>
          <Link style={{margin : "20px" , color:"#fa4" , fontSize : "25px"}} href={"/"}>Home Page</Link>
          <Link style={{margin : "20px" , color:"#fa4" , fontSize : "25px"}}href={"/Posts"}>Posts</Link>
          <Link style={{margin : "20px" , color:"#fa4" , fontSize : "25px"}}href={"/Artical"}>Artical</Link>  
        </nav>
        {children}
        </body>
    </html>
  );
}
