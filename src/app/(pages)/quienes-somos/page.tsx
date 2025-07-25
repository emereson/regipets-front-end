import BannerPages from "@/app/components/BannerPages";
import NoQueremosMasMascotas from "./components/NoQueremosMasMascotas";
import UneteFamiliaRegipets from "./components/UneteFamiliaRegipets";

export default function QuienesSomos() {
  return (
    <main>
      <BannerPages title="¿Quiénes Somos?" />
      <NoQueremosMasMascotas />
      <UneteFamiliaRegipets />
    </main>
  );
}
