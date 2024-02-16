import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Canva",
  description: "Design tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout children={children} />
      </body>
    </html>
  );
}
