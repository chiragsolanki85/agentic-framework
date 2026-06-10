import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/TopNav";

export const metadata: Metadata = {
  title: "Crosstide Agentic SDLC Portal",
  description: "Enterprise guide for Crosstide's Agentic SDLC blueprint.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main className="container" style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
