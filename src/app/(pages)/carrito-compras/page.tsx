import BannerPages from "@/app/components/BannerPages";
import ProductosCarrito from "./components/ProductosCarrito";

export default function CarritoCompras() {
  return (
    <main className="w-full overflow-x-hidden">
      <BannerPages title="Carrito de Compras" />
      <ProductosCarrito />
    </main>
  );
}
