"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function BannerProductos() {
  return (
    <section className="relative  h-screen w-screen max-h-[1000px] bg-blue flex flex-col   overflow-hidden font-[SegoeUiBlack]">
      <div
        className="absolute top-0 left-0  w-full h-full opacity-10"
        style={{
          backgroundImage: "url('/identidadVisual/backBlanco-2-01.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "70%",
          backgroundPosition: "top left",
        }}
      ></div>

      <Swiper
        className="h-full w-full"
        modules={[Navigation, A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        pagination={true}
      >
        <SwiperSlide>
          <div className="relative w-full h-full flex items-end justify-center px-20 gap-20">
            <Image
              className="w-[40%]"
              src="/inicio/Chica1.png"
              alt="Banner de inicio"
              width={3000}
              height={3000}
              priority
            />

            <div className="h-full flex flex-col items-center justify-center  ">
              <h1 className="text-white text-5xl  text-end">
                ¡Ellos son familia! <br /> Protégelos como tal <br /> con
                Regipets
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full flex items-end justify-center px-20 ">
            <Image
              className="w-[50%]"
              src="/inicio/Background2.png"
              alt="Banner de inicio"
              width={3000}
              height={3000}
              priority
            />

            <div className="h-full flex flex-col items-center justify-center   z-10 ">
              <h1 className="text-white text-5xl  text-end text-nowrap">
                El primer y más grande <br />
                registro profesional <br />
                de mascotas en el Perú
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-full min-h-[40px] bg-orange z-20 flex items-center justify-center ">
        <h2 className="text-white font-[ArialRoundedmtBold] text-lg">
          Cada 3 minutos una mascota se pierde en el Perú: No dejaremos que la
          tuya sea una estadística.
        </h2>
      </div>
    </section>
  );
}
