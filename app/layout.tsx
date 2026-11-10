import type { Metadata } from "next";
import "./motor.css";

export const metadata: Metadata = {
  title: "J. Rahul Motor Works | Expert Multibrand Car Care",
  description: "Expert care. Every car. Every drive. Explore multibrand car servicing, diagnostics, maintenance and repairs at J. Rahul Motor Works. Book a service in our interactive website demo.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
