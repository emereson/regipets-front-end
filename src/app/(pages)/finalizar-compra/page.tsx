import BannerPages from "@/app/components/BannerPages";
import DatosCliente from "./components/DatosCliente";

export default function FinalizarCompra() {
  return (
    <main>
      <BannerPages title="Completa tu pedido" />
      <DatosCliente />
    </main>
  );
}
