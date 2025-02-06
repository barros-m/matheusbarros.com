import "./globals.css";

export const metadata = {
  title: "Mattheus Barros - Portfolio",
  description: "Software Engineer | Cloud Enthusiast",
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
