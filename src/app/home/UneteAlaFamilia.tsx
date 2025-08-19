"use client";

import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/react";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

export default function UneteAlaFamilia() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const rutasVideos = [
    {
      id: 1,
      ruta: "/inicio/Testimonio1.mp4",
      img_ruta: "/inicio/Testimonio1.jpg",
    },
    {
      id: 2,
      ruta: "/inicio/Testimonio2.mp4",
      img_ruta: "/inicio/Testimonio2.jpg",
    },
    {
      id: 3,
      ruta: "/inicio/Testimonio3.mp4",
      img_ruta: "/inicio/Testimonio3.jpg",
    },
  ];

  const handleOpenVideo = (ruta: string) => {
    setSelectedVideo(ruta);
    onOpen();
  };

  return (
    <section className="w-full flex flex-col items-center gap-10 px-6 py-16 max-sm:px-4 max-sm:gap-5 ">
      <h2 className="font-[SegoeUiBlack] text-title text-center text-[#565656]">
        Únete a la familia Regipets
      </h2>

      <div className="flex flex-wrap gap-10 justify-center">
        {rutasVideos.map((item) => (
          <article
            key={item.id}
            className="relative cursor-pointer flex items-center justify-center overflow-hidden rounded-xl hover:scale-105 duration-500"
            onClick={() => handleOpenVideo(item.ruta)}
          >
            <Image
              className="w-[280px] h-[350px] object-cover brightness-[0.6]  blur-[2px] rounded-2xl"
              src={item.img_ruta}
              alt="Banner de inicio"
              width={800}
              height={800}
            />
            {/* <video
              className="w-[280px] h-[350px] object-cover brightness-[0.6]  blur-[3px] rounded-2xl"
              src={item.ruta}
              muted
              preload="metadata"
              controls={false}
              playsInline
            /> */}
            <Image
              className="absolute right-[-30px] bottom-[-40px] w-[150px] -rotate-25 "
              style={{ filter: "brightness(1.1)" }}
              src="/inicio/Logo-Regipets-blanco-06.png"
              alt="Banner de inicio"
              width={800}
              height={800}
            />
            <FaPlay className="absolute text-white text-title z-10" />
          </article>
        ))}
      </div>

      {/* Modal con el video seleccionado */}
      <Modal
        className="fixed z-[60] p-4"
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
        size="sm"
        placement="center"
      >
        <ModalContent className="relative  bg-transparent shadow-none">
          <ModalBody className="p-0">
            {selectedVideo && (
              <video
                controls
                autoPlay
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-auto rounded-lg"
              >
                <source src={selectedVideo} type="video/mp4" />
                Tu navegador no soporta video.
              </video>
            )}
          </ModalBody>

          <IoClose
            onClick={onClose}
            className="absolute cursor-p top-0 right-0 text-4xl text-white bg-blue rounded-full p-1"
          />
        </ModalContent>
      </Modal>
    </section>
  );
}
