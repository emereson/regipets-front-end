import Image from "next/image";
import { MdCheck } from "react-icons/md";

export default function UneteFamiliaRegipets() {
  const listInfo = [
    {
      id: 1,
      icon: "/quienesSomos/quienes5.png",
      title: "Info detallada de la mascota",
      paragraph:
        "Agrega toda la información necesaria de tu mascota: datos de contacto, información médica y detalles importantes. Todo en un solo lugar, disponible las 24 horas.",
    },
    {
      id: 2,
      icon: "/quienesSomos/quienes1.png",
      title: "Historial de vacunas y tratamientos",
      paragraph:
        "Registra y lleva control de citas médicas, chequeos, vacunas y todos los eventos importantes. Mantén un seguimiento completo de la salud de tu mascota en una sola plataforma.",
    },
    {
      id: 3,
      icon: "/quienesSomos/quienes2.png",
      title: "Descuentos y ofertas",
      paragraph:
        "Accede a descuentos exclusivos y servicios especiales en nuestros establecimientos aliados. Solo presenta tu DNI REGIPETS Premium vigente y disfruta de beneficios únicos.",
    },
    {
      id: 4,
      icon: "/quienesSomos/quienes3.png",
      title: "Innovación tecnológica",
      paragraph:
        "Implementamos constantemente mejoras en nuestro sistema de identificación y registro. Estamos desarrollando actualizaciones que pronto llegarán al mercado nacional.",
    },
    {
      id: 5,
      icon: "/quienesSomos/quienes4.png",
      title: "Actividades, sorteos y eventos",
      paragraph:
        "Participa en nuestros eventos, sorteos y actividades virtuales y presenciales cada mes. Únete a nuestra comunidad activa y descubre las dinámicas vigentes.",
    },
  ];

  return (
    <section className="relative bg-blue text-white flex flex-col items-center gap-16 rounded-t-[80px] mt-[-50px] px-6 pt-14 pb-[50px]">
      <h2 className="text-4xl text-center font-[SegoeUiBlack]">
        Únete a la familia Regipets
      </h2>
      <div className="w-full max-w-3xl flex flex-col gap-14">
        {listInfo.map((item) => (
          <article key={item.id} className="w-full flex gap-8">
            <div className="min-w-32 relative">
              <Image
                className="w-32"
                src={item.icon}
                alt={item.title}
                width={3000}
                height={1000}
              />
              <span className="w-10 h-10 absolute bottom-0 right-2 rounded-full bg-black flex items-center justify-center">
                <MdCheck className="text-xl" />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-[SegoeUiBlack] text-2xl">{item.title}</h3>
              <p className="text-lg font-light">{item.paragraph}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
