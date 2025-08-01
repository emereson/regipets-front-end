import Image from "next/image";

export default function EncontreUnaMascota() {
  return (
    <section className="p-10 text-white font-[ArialRoundedmtBold] ">
      <div className="relative w-full max-w-[950px]   m-auto bg-blue flex flex-col rounded-4xl px-20 pt-20 pb-12 gap-4 shadow-2xl shadow-neutral-500">
        <div className=" flex flex-col gap-6">
          <h2 className="font-[SegoeUiBlack] text-3xl text-nowrap">
            Encontré una mascota
          </h2>
          <p className="text-xl font-light">
            Ingresa el código Regipets o <br /> número de Microchip para <br />
            identificar y ubicar a la familia
          </p>
          <form className="relative w-[310px] flex items-center pt-6">
            <input
              className="w-full  h-14  bg-white  text-sm text-neutral-700 tracking-tighter p-3 rounded-3xl  shadow-md shadow-neutral-400 border-t-1 border-neutral-100"
              type="text"
              placeholder="Ingresa el código RUMP o MICROCHIP"
            />
            <button className="absolute  -right-10 p-4  h-16 text-white  text-lg  flex items-center bg-orange rounded-4xl    ">
              Buscar
            </button>
          </form>
        </div>
        <Image
          className="absolute  h-[450px] w-auto top-[-28px] right-[130px]"
          src="/inicio/animalitos1.png"
          alt="Banner de inicio"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
