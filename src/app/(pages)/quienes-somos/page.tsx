import BannerPages from "@/app/components/BannerPages";
import NoQueremosMasMascotas from "./components/NoQueremosMasMascotas";
import UneteFamiliaRegipets from "./components/UneteFamiliaRegipets";
import NivelProteccion from "@/app/home/NivelProteccion";

export default function QuienesSomos() {
  return (
    <main>
      <BannerPages title="¿Quiénes Somos?" />
      <NoQueremosMasMascotas />
      <UneteFamiliaRegipets />
      <div className="relative h-auto  bg-white  rounded-t-[60px] mt-[-60px]  px-6 max-sm:rounded-t-4xl max-sm:px-4 pb-[100px]">
        <NivelProteccion />
      </div>
    </main>
  );
}
