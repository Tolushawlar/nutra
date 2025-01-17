import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "./context/AppContext";
import Header from "./(Components)/Header";
import { Footer } from "./(Components)/Footer";
import Slider from "./(Components)/Slider";
import Header2 from "./(Components)/Header2";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppContextProvider>
      <html lang="en">
        <body>
          {/* <Header /> */}
          <Header2/>
          
          <div className="pt-[70px] ">{children}</div>
          <Footer />
        </body>
      </html>
    </AppContextProvider>
  );
}
