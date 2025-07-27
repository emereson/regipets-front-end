import Image from "next/image";

export default function ComoAdquirirlo() {
  return (
    <section className="relative  bg-white   flex items-center justify-center overflow-hidden font-[SegoeUiBlack] text-white py-28 pb-36 rounded-t-[80px] -mt-16 text-gray">
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
        <h2 className="text-3xl">¿Cómo adquirirlo?</h2>
        <div className="flex items-center gap-8">
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
            <h3 className="text-xl mt-2">Evita pérdidas</h3>
            <p className="font-[ArialRoundedmtBold]">
              Aumenta en un 90% la <br /> probalididad de que tu <br />{" "}
              mascotita vuelva a casa
            </p>
          </article>

          <Image
            className="w-[120px] h-min"
            src="/inicio/blue_arrow.png"
            alt="Banner de inicio"
            width={200}
            height={200}
          />
          <article className="flex flex-col items-center gap-3 ">
            <Image
              className="w-[180px] "
              src="/inicio/Regipets_icon_2.png"
              alt="Banner de inicio"
              width={800}
              height={800}
            />
            <span className="rounded-full bg-orange w-10 h-10 flex items-center justify-center text-white">
              2
            </span>
            <h3 className="text-xl mt-2 text-nowrap">
              Válido en el extranjero
            </h3>
            <p className="font-[ArialRoundedmtBold] text-center">
              Nuestro registro tiene un <br /> alcance nacional e <br />{" "}
              iternacional
            </p>
          </article>
          <Image
            className="w-[120px] h-min"
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
            <h3 className="text-xl mt-2 text-nowrap">Cerca a ti </h3>
            <p className="font-[ArialRoundedmtBold] text-center">
              Hacemos envios seguros a <br /> todo el Perú a través de <br />{" "}
              empresa aliadas
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
