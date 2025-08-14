import Image from "next/image";

export default function DatosImpactantes() {
  return (
    <section className="relative w-full overflow-hidden bg-blue px-6 py-16 text-white font-[ArialRoundedmtBold] flex flex-col  items-center justify-center ">
      <h2 className="text-xl">El problema real</h2>
      <h3 className="text-title font-[SegoeUiBlack]">3 Datos Impactantes</h3>

      <ul className="w-full max-w-[1000px] text-xl mt-6 flex flex-col gap-2">
        <li>📊 7 de cada 10 mascotas perdidas nunca regresan</li>
        <li>💔 Solo 15% de mascotas sin ID son devueltas</li>
        <li>⏰ Las primeras 24 horas son críticas</li>
      </ul>
      <div className="w-full max-w-[1000px] flex items-center pt-16 gap-10 z-10  max-sm:flex-col">
        <Image
          className="w-[450px] max-sm:w-full max-sm:max-w-[350px]"
          src="/inicio/width_550.png"
          alt="Banner de inicio"
          width={800}
          height={800}
        />
        <div className=" w-full  flex flex-col">
          <h2 className="text-xl">La tranquilidad que mereces</h2>
          <h3 className="text-title font-[SegoeUiBlack]">3 Beneficios Clave</h3>
          <ul className="w-full text-xl mt-6 flex flex-col gap-4">
            <li>🛡️ Sistema Completo: DNI + QR + Notificaciones</li>
            <li>📱 Tecnología 24/7: Te avisamos cuando escanean el código</li>
            <li>
              ❤️ REGIPETS: 7 años ayudando a miles de mascotas a volver a casa
            </li>
          </ul>
        </div>
      </div>
      <Image
        className="absolute right-[-80px] bottom-[-120px] w-[350px] -rotate-25 "
        style={{ filter: "brightness(1.2)" }}
        src="/inicio/Logo-Regipets-blanco-06.png"
        alt="Banner de inicio"
        width={800}
        height={800}
      />
    </section>
  );
}
