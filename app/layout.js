import "./globals.css";

export const metadata = {
  title: "Digital Dog Illustration",
  description: "A playful vector illustration of a dog."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
