import Image from "next/image";

export default function MascotasRegistradasHoy() {
  return (
    <section className="relative  bg-blue  flex items-center justify-center overflow-hidden font-[SegoeUiBlack] text-white py-28 pb-36 rounded-t-[80px] mt-28">
      <div
        className="absolute top-0 left-0  w-full h-full opacity-10"
        style={{
          backgroundImage: "url('/identidadVisual/backBlanco-2-01.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "70%",
          backgroundPosition: "top left",
        }}
      ></div>
      <div className="relative w-[700px] flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl">¿Mascotas registradas hasta hoy? </h2>
        <h2 className="text-2xl">
          ¡Más de <strong className="text-3xl  ">200 mil</strong>!
        </h2>
        <div className="text-xl font-[ArialRoundedmtBold] mt-10 ml-[-150px] flex flex-col gap-2">
          <p>
            Más que un DNI y lindos <br /> accesorios...
          </p>
          <p>
            Es seguridad para tu <br /> mascota y una prueba de <br />
            amor.
          </p>
        </div>
        <button className="px-8 py-3 text-xl bg-orange  z-10 rounded-full ml-[-100px] mt-6">
          Iniciar Registro
        </button>
      </div>
      <Image
        className="w-[450px] -ml-30 "
        src="/inicio/Capa3.png"
        alt="Banner de inicio"
        width={800}
        height={800}
      />
    </section>
  );
}
