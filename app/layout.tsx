import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/nav/NavBar";

const poppins = Poppins({ subsets: ["latin"], weight: ['400','700']  });

export const metadata: Metadata = {
  title: "Tomek",
  description: "Tomek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen" >
        
          <NavBar/>
          <main className="flex-grow">{children}</main>
          <Footer/>
        </div>
       
      </body>
    </html>
  );
}
