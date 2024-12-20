import type { Metadata } from "next";
import {
  Anonymous_Pro,
  Roboto_Mono,
  Share_Tech_Mono,
  Fira_Code,
} from "next/font/google";
import { MatrixRain } from "@/components/animations/MatrixRain";
// import { MatrixHeader } from "@/components/layout/MatrixHeader";
import "./globals.css";

export const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-anonymous-pro",
});

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-mono",
});
export const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share-tech-mono",
});
export const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Heath Babb Portfolio",
    default: "Heath Babb Portfolio",
  },
  description:
    "The personal portfolio and resume of Heath Babb | Web Developer",
  applicationName: "Portfolio & Resume",
  keywords: "resume, portfolio, Heath Babb, work history",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anonymousPro.variable} ${robotoMono.variable} ${shareTechMono.variable} ${firaCode.variable} bg-matrix-dark antialiased`}
      >
        {/* <MatrixHeader /> */}
        <main className="flex min-h-screen flex-col">
          <MatrixRain className="opacity-50" />
          {children}
        </main>
      </body>
    </html>
  );
}
