import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Posts",
  description: "Generated An Posts Page",
};

export default function PostLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{textAlign : "center"  , backgroundColor : "lightgray" , margin : "1rem" , padding : "1rem" , color : "black"} }>
            <h1>Posts</h1>
            <p>lorem yheanlnvuaeuhfalfmal fufajfanfoahfjm ijfooiahfafkalfhauofhaojpogouhoeglwegbu'lekfnjnuiwegwonljvniu[eb ege;jgljebu</p>
        </div>
        {children}
        </body>
    </html>
  );
}