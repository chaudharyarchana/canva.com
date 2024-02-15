import "./globals.css";


export const metadata = {
  title: "Canva",
  description: "Design tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
