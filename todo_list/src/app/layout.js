// app/layout.js
import { Inter } from "next/font/google";
import "../styles.css"; // Import your global CSS styles

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "A simple Todo App built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <div className="wrapper">
          {/* Rendering children (i.e., the page content) */}
          {children}
        </div>
      </body>
    </html>
  );
}
