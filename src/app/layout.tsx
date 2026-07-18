import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/common/theme-provider";
// import Cursor from "@/components/common/cursor/Cursor";
import { Cursor } from "@/components/common/cursor";

export const metadata: Metadata = {
  title: {
    default: "Vontrixia Technologies Pvt Ltd",
    template: "%s | Vontrixia Technologies",
  },

  description:
    "Vontrixia Technologies Pvt Ltd delivers AI-powered digital solutions, enterprise software, web applications, and modern technology experiences.",

  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
    shortcut: "/logo.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Cursor />
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}