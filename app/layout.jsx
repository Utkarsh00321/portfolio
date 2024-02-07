import { Teko } from "next/font/google";
import "@styles/globals.css";

const teko = Teko({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "portfolio-utkarsh",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={teko.className}> {children}</body>
    </html>
  );
}
