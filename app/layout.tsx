import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lil Squiggle – Don't Drink and Dial",
  description:
    "One call. Every era. Same regret. Shop the official Lil Squiggle merch drop — chibi Rasta Lego reggae-dub campaign spanning every decade of drunk-dialing disaster.",
  openGraph: {
    title: "Lil Squiggle – Don't Drink and Dial",
    description:
      "One call. Every era. Same regret. Shop the official Lil Squiggle merch drop.",
    url: "https://lil-squiggle.com",
    siteName: "Lil Squiggle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lil Squiggle – Don't Drink and Dial",
    description: "One call. Every era. Same regret.",
    site: "@lil_squigglemon",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='72' rx='38' ry='14' fill='%232C2C2A'/%3E%3Crect x='18' y='40' width='64' height='34' rx='10' fill='%232C2C2A'/%3E%3Crect x='14' y='54' width='72' height='12' rx='6' fill='%231D9E75'/%3E%3Crect x='14' y='54' width='24' height='12' rx='0' fill='%231D9E75'/%3E%3Crect x='38' y='54' width='24' height='12' fill='%23EF9F27'/%3E%3Crect x='62' y='54' width='24' height='12' rx='0' fill='%23D85A30'/%3E%3Crect x='14' y='60' width='72' height='6' rx='3' fill='%232C2C2A' fill-opacity='0.15'/%3E%3Cellipse cx='50' cy='42' rx='32' ry='22' fill='%231D9E75'/%3E%3Cellipse cx='50' cy='42' rx='32' ry='22' fill='url(%23rasta)'/%3E%3Cdefs%3E%3ClinearGradient id='rasta' x1='0' y1='0' x2='1' y2='0'%3E%3Cstop offset='0%25' stop-color='%231D9E75'/%3E%3Cstop offset='50%25' stop-color='%23EF9F27'/%3E%3Cstop offset='100%25' stop-color='%23D85A30'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='50' cy='28' rx='14' ry='10' fill='%23EF9F27'/%3E%3Ccircle cx='50' cy='22' r='7' fill='%23D85A30'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
