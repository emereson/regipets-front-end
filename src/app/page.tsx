import BannerProductos from "./home/BannerHome";
import ComoAdquirirlo from "./home/ComoAdquirirlo";
import DatosImpactantes from "./home/DatosImpactantes";
import EncontreUnaMascota from "./home/EncontreUnaMascota";
import MascotasRegistradasHoy from "./home/MascotasRegistradasHoy";
import NivelProteccion from "./home/NivelProteccion";
import UneteAlaFamilia from "./home/UneteAlaFamilia";

export default function Home() {
  return (
    <main
      className="w-full overflow-x-hidden"
      style={{
        backgroundImage: "url('/identidadVisual/backBlanco-2-01.png')",
        backgroundRepeat: "repeat",
        // backgroundColor: "#f7f7f7",
        backgroundSize: "70%",
        backgroundPosition: "top left",
      }}
    >
      <BannerProductos />
      <UneteAlaFamilia />
      <DatosImpactantes />
      <NivelProteccion />
      <EncontreUnaMascota />
      <MascotasRegistradasHoy />
      <ComoAdquirirlo />
    </main>
  );
}
