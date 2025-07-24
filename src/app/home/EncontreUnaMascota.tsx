import Image from "next/image";

export default function EncontreUnaMascota() {
  return (
    <section className="p-10 text-white font-[ArialRoundedmtBold] ">
      <div className="relative w-full max-w-[1100px]   m-auto bg-blue flex flex-col rounded-4xl px-20 pt-20 pb-12 gap-4 shadow-2xl shadow-neutral-500">
        <div className="w-min flex flex-col gap-6">
          <h2 className="font-[SegoeUiBlack] text-4xl text-nowrap">
            Encontré una mascota
          </h2>
          <p className="text-2xl font-light">
            Ingresa el código Regipets o <br /> número de Microchip para <br />
            identificar y ubicar a la familia
          </p>
          <form className="relative w-full flex items-center pt-7">
            <input
              className="w-full bg-white text-base text-neutral-700 p-4 h-16 rounded-3xl"
              type="text"
              placeholder="Ingresa el código RUMP o MICROCHIP"
            />
            <button className="absolute -right-14 p-6  h-18 bg-orange rounded-4xl text-xl ">
              Buscar
            </button>
          </form>
        </div>
        <Image
          className="absolute  h-[480px] w-auto top-[-28px] right-[130px]"
          src="/inicio/animalitos1.png"
          alt="Banner de inicio"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
