import Image from "next/image";

export default function InegreseCodigo() {
  return (
    <section className="relative bg-white  rounded-t-[60px] mt-[-60px]  px-6">
      <div className="w-full max-w-3xl m-auto flex items-center gap-4">
        <section className="w-min flex flex-col gap-4 -mt-10">
          <h2 className="text-3xl text-gray font-[SegoeUiBlack]  text-nowrap">
            Encontré una mascota
          </h2>
          <p className=" text-2xl text-neutral-500 text-nowrap">
            Ingresa el código Regipets o <br /> número de Microchip para <br />{" "}
            identificar y ubicar a la familia
          </p>
          <form className="relative w-[300px] flex items-center pt-4">
            <input
              className="w-full  h-14  bg-white  text-sm text-neutral-700 tracking-tighter p-3 rounded-3xl  shadow-md shadow-neutral-400 border-t-1 border-neutral-100"
              type="text"
              placeholder="Ingresa el código RUMP o MICROCHIP"
            />
            <button className="absolute  -right-10 p-4  h-16 text-white  text-lg  flex items-center bg-orange rounded-4xl    ">
              Buscar
            </button>
          </form>
        </section>
        <Image
          className="w-[430px] "
          src="/olfatoPet.png"
          alt="Banner de inicio"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
