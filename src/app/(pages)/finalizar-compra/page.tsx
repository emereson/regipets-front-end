import BannerPages from "@/app/components/BannerPages";
import DatosCliente from "./components/DatosCliente";
import MiOrden from "./components/MiOrden";

export default function FinalizarCompra() {
  return (
    <main>
      <BannerPages title="Completa tu pedido" />
      <div className="relative h-auto  bg-white  rounded-t-[60px] mt-[-60px]  px-6 max-sm:rounded-t-4xl max-sm:px-4">
        <div className="max-w-5xl w-full m-auto flex gap-10 max-sm:flex-col p-4">
          <DatosCliente />
          <MiOrden />
        </div>
      </div>
    </main>
  );
}
