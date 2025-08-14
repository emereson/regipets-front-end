import "@/app/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Providers } from "./providers";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="ligth">
      <body className="w-screen flex flex-col overflow-x-hidden">
        <Header />
        <Providers>{children}</Providers>
        <Cart />
        <Toaster richColors />
      </body>
    </html>
  );
}
