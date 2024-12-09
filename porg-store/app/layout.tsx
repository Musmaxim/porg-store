import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import HeaderStatic from "@/components/sections/header/header-static";
import HeaderDynamic from "@/components/sections/header/header-dynamic";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  subsets:['cyrillic'],
  weight:['400', '700']
})

export const metadata: Metadata = {
  title: "Porg Store",
  description: "Store for you dog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={roboto.className}
      >
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <HeaderStatic className="hidden md:block" />
        <HeaderDynamic className="block md:hidden" />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
