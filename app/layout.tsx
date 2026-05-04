import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vipul Negi | Developer Portfolio",
  description:
    "Portfolio of Vipul Negi, a React Native Application Developer building Android and iOS apps with REST APIs, Firebase, maps, Socket.IO, Redux, and Zustand.",
  keywords: [
    "Vipul Negi",
    "React Native Application Developer",
    "React Native developer",
    "mobile app developer",
    "Android developer",
    "iOS developer",
    "Firebase",
    "Socket.IO",
  ],
  openGraph: {
    title: "Vipul Negi | Developer Portfolio",
    description: "React Native portfolio covering mobile apps, REST APIs, maps, sockets, Firebase, and production app systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-black font-sans text-white">{children}</body>
    </html>
  );
}
