import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Shanmukh Anaparthi",
    template: "%s | Shanmukh Anaparthi",
  },
  description: "Full Stack Developer and DevOps Engineer.",
  openGraph: {
    title: "Shanmukh Anaparthi",
    description:
      "Full Stack Developer and DevOps Engineer.",
    url: "https://shanmukh-website.vercel.app/",
    siteName: "https://shanmukh-website.vercel.app/",
    images: [
      {
        url: "https://shanmukhanaparthi.pythonanywhere.com/static/images/AS.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  icons: {
    shortcut: "https://shanmukhanaparthi.pythonanywhere.com/static/images/AS.jpg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
