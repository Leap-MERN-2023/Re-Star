// "use client";s

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/navbar/header";
import Footer from "@/components/sections/navbar/footer";
import UserProvider from "@/context/UserProvider";
import { ToastContainer } from "react-toastify";
import PasswordProvider from "@/components/sections/resetPass/PasswordContext";
import "react-toastify/dist/ReactToastify.css";
import ReviewProvider from "@/context/ReviewProvider";
import CategoryProvider from "@/context/CategoryProvider";

import RestaurantProvider from "@/context/RestaurantProvider";
import FavoritesProvider from "@/context/FavoritesProvider";
import MenuProvider from "@/context/MenuProvider";
import { ThemeProvider } from "@/context/ThemeProvider";

import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RE-STAR",
  description: "Restaurant Reviewer app ",
  keywords: [
    "Created at PINECONE ACADEMY",
    "WE LOVE PINECONE",
    "Restaurant Reviewer App ",
    "RE-STAR TEAM",
    "WE LOVE UGTAKHAA SENSEI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider>
            <CategoryProvider>
              <FavoritesProvider>
                <ReviewProvider>
                  <PasswordProvider>
                    <RestaurantProvider>
                      <MenuProvider>
                        <Header />
                        {children}
                        {/* <ProgressBar
                          height="4px"
                          color="#fffd00"
                          options={{ showSpinner: false }}
                          shallowRouting
                        /> */}
                        <ToastContainer />
                        <Footer />
                      </MenuProvider>
                    </RestaurantProvider>
                  </PasswordProvider>
                </ReviewProvider>
              </FavoritesProvider>
            </CategoryProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
