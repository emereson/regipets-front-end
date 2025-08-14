import BannerPages from "@/app/components/BannerPages";
import InegreseCodigo from "./components/InegreseCodigo";

export default function EncontreUnaMascota() {
  return (
    <main className="w-full overflow-x-hidden">
      <BannerPages title="Encontré una Mascota" />
      <InegreseCodigo />
    </main>
  );
}
