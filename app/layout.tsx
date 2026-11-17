import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SASINC - Learn English with Fun",
  description:
    "Build everyday English skills with beginner grammar lessons, interview practice, and quick quizzes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
