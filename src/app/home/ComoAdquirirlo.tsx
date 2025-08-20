import Image from "next/image";

export default function ComoAdquirirlo() {
  return (
    <section
      className="relative  bg-white   flex items-center justify-center overflow-hidden font-[SegoeUiBlack] text-white py-28 pb-36 rounded-t-[80px] -mt-16 text-gray
    max-sm:rounded-t-4xl max-sm:pt-14
    "
    >
      <div
        className="absolute top-0 left-0  w-full h-full opacity-90"
        style={{
          backgroundImage: "url('/identidadVisual/backBlanco-2-01.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "70%",
          backgroundPosition: "top left",
        }}
      ></div>
      <div className="w-full flex flex-col items-center gap-16 z-10 ">
        <h2 className="text-title">¿Cómo adquirirlo?</h2>
        <div className="flex items-center gap-8 max-sm:flex-col">
          <article className="flex flex-col items-center gap-3">
            <Image
              className="w-[230px] "
              src="/inicio/Regipets_icon_1.png"
              alt="Banner de inicio"
              width={800}
              height={800}
            />
            <span className="rounded-full bg-orange w-10 h-10 flex items-center justify-center text-white">
              1
            </span>
            <h3 className="text-xl mt-2">Registra</h3>
            <p className="font-[ArialRoundedmtBold] max-sm:text-sm">
              Elije tu producto, realiza <br /> el pago y deja los datos <br />{" "}
              para realizar tu registro.
            </p>
          </article>

          <Image
            className="w-[120px] h-min max-sm:rotate-90 max-sm:my-6"
            src="/inicio/blue_arrow.png"
            alt="Banner de inicio"
            width={200}
            height={200}
          />
          <article className="flex flex-col items-center gap-3 ">
            <Image
              className="w-[210px] "
              src="/inicio/Regipets_icon_2.png"
              alt="Banner de inicio"
              width={800}
              height={800}
            />
            <span className="rounded-full bg-orange w-10 h-10 flex items-center justify-center text-white">
              2
            </span>
            <h3 className="text-xl mt-2 text-nowrap">Espera</h3>
            <p className="font-[ArialRoundedmtBold] text-center max-sm:text-sm">
              Relájate y espera el envio.
            </p>
          </article>
          <Image
            className="w-[120px] h-min max-sm:rotate-90 max-sm:my-6"
            src="/inicio/blue_arrow_2.png"
            alt="Banner de inicio"
            width={200}
            height={200}
          />
          <article className="flex flex-col items-center gap-3">
            <Image
              className="w-[210px]"
              src="/inicio/Regipets_icon_3.png"
              alt="Banner de inicio"
              width={800}
              height={800}
            />
            <span className="rounded-full bg-orange w-10 h-10 flex items-center justify-center text-white">
              3
            </span>
            <h3 className="text-xl mt-2 text-nowrap">Disfruta </h3>
            <p className="font-[ArialRoundedmtBold] text-center max-sm:text-sm">
              Obtén descuentos y ofertas <br /> en cientos de negocios <br />
              en el país.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
