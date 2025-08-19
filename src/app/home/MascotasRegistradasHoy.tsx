import Image from "next/image";

export default function MascotasRegistradasHoy() {
  return (
    <section
      className="relative  bg-blue  flex items-center justify-center overflow-hidden font-[SegoeUiBlack] text-white py-28 pb-36 rounded-t-[80px] mt-28 
    max-sm:rounded-t-4xl max-sm:px-4 max-sm:flex-col max-sm:py-14 
    "
    >
      <div
        className="absolute top-0 left-0  w-full h-full opacity-10"
        style={{
          backgroundImage: "url('/identidadVisual/backBlanco-2-01.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "70%",
          backgroundPosition: "top left",
        }}
      ></div>
      <div className="relative w-[700px] flex flex-col justify-center items-center gap-4 max-sm:w-full  max-sm:text-center ">
        <h2 className="text-3xl">¿Mascotas registradas hasta hoy? </h2>
        <h2 className="text-3xl ">
          ¡Más de <strong className="text-title  ">200 mil</strong>!
        </h2>
        <div className="w-full text-2xl font-[ArialRoundedmtBold] mt-10 ml-[-150px] flex flex-col gap-2 max-sm:ml-0 max-sm:mt-5">
          <p>
            Más que un DNI y lindos <br /> accesorios...
          </p>
          <p>
            Es seguridad para tu <br /> mascota y una prueba de <br />
            amor.
          </p>
          <button className=" w-fit px-8 py-3 text-xl bg-orange  z-10 rounded-full  mt-6  cursor-pointer max-sm:mt-5">
            Iniciar Registro
          </button>
        </div>
      </div>
      <Image
        className="w-[450px] -ml-30  max-sm:w-[300px] max-sm:m-auto "
        src="/inicio/Capa3.png"
        alt="Banner de inicio"
        width={800}
        height={800}
      />
    </section>
  );
}
