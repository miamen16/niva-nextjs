import "./globals.css";

export const metadata = {
  title: "Our Climate, Our Community",
  description: "Climate education and community action across the Mediterranean.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
