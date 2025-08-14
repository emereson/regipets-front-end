"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const slides = [
  {
    img: "/inicio/Chica1.png",
    imgWidth: "w-[40%]",
    title: (
      <>
        ¡Ellos son familia! <br /> Protégelos como tal <br /> con Regipets
      </>
    ),
  },
  {
    img: "/inicio/Background2.png",
    imgWidth: "w-[50%]",
    title: (
      <>
        El primer y más grande <br /> registro profesional <br /> de mascotas en
        el Perú
      </>
    ),
  },
];

export default function BannerProductos() {
  return (
    <section className="relative h-screen w-screen max-h-[1000px] bg-blue flex flex-col overflow-hidden font-[SegoeUiBlack]">
      {/* Fondo con patrón */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/identidadVisual/backBlanco-2-01.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "70%",
          backgroundPosition: "top left",
        }}
      />

      <Swiper
        className="h-full w-full"
        modules={[Navigation, A11y, Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 50000, disableOnInteraction: false }}
        pagination
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full flex items-end justify-center px-20 gap-20 max-sm:flex-col-reverse max-sm:px-4 max-sm:gap-2 max-sm:items-center">
              <Image
                className={`${slide.imgWidth} max-sm:w-full max-sm:max-w-[250px]`}
                src={slide.img}
                alt="Banner de inicio"
                width={3000}
                height={3000}
                priority
              />
              <div className="h-full flex flex-col items-end justify-center text-white max-sm:items-center max-sm:pt-[150px] max-sm:justify-start">
                <h1 className="text-5xl text-end text-nowrap max-sm:text-2xl max-sm:text-center">
                  {slide.title}
                </h1>
                <button className="px-8 py-3 text-xl bg-orange rounded-full mt-6 cursor-pointer max-sm:text-sm max-sm:px-4 max-sm:py-2">
                  Iniciar Registro
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto inferior */}
      <div className="w-full min-h-[40px] bg-orange z-20 flex items-center justify-center px-4">
        <h2 className="text-white text-center font-[ArialRoundedmtBold] max-sm:text-xs">
          Cada 3 minutos una mascota se pierde en el Perú: No dejaremos que la
          tuya sea una estadística.
        </h2>
      </div>
    </section>
  );
}
