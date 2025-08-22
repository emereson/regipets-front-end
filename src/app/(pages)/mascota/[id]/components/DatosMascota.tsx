import { Mascota } from "@/interfaces/mascota.interface";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";

interface Props {
  mascota: Mascota;
}

export default function DatosMascota({ mascota }: Props) {
  const titleTexto = (title: string, texto: string) => {
    return (
      <div className="w-full space-y-1">
        <h4 className="text-lg text-[#565656] font-[SegoeUiBlack]">{title}</h4>
        <p className="  text-[#565656] font-[ArialRoundedmtBold]">{texto}</p>
      </div>
    );
  };

  return (
    <section className="relative  bg-white   flex justify-center  gap-10 rounded-t-[80px] mt-[-80px]  px-6 pt-14 pb-[50px] max-sm:rounded-4xl">
      <div className="w-full max-w-5xl flex gap-14 max-sm:flex-col">
        <div className="w-full max-w-[400px]">
          <Image
            className="w-full max-w-[400px]"
            src={"/contactanos-regipets.png"}
            alt="mascota"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full flex flex-col gap-4 ">
          <h2 className="text-2xl text-[#0356ba] font-[SegoeUiBlack] pb-6">
            CÓDIGO REGIPETS:{" "}
            <strong className="text-[#565656]">{mascota.dni}</strong>
          </h2>

          {titleTexto("Nombre de la Mascota: ", mascota.nombre || "-")}
          {titleTexto("Apellidos de la Mascota: ", mascota.apellido || "-")}
          <div className="flex  justify-between">
            {titleTexto("Sexo: ", mascota.sexo || "-")}
            {titleTexto("Clasificación: ", "Amistoso")}
          </div>
          <div className="flex  justify-between">
            {titleTexto("Esterilizado: ", mascota?.castrado ? "Si" : "No")}
            {titleTexto("Alergias: ", "Sin alergias")}
          </div>
          {titleTexto("EstadodeSalud:: ", "-")}
          <h2 className="text-2xl text-[#0356ba] font-[SegoeUiBlack] pb-2">
            CONTACTA A LA FAMILIA
          </h2>
          {titleTexto(
            "Responsable 1: ",
            `${mascota.usuario.nombre.toUpperCase()} ${mascota.usuario.apellido.toUpperCase()}`
          )}
          {titleTexto(
            "Nùmero de Contacto: ",
            mascota.usuario.celular || mascota.usuario.telefono || "-"
          )}
          <div>
            <Link
              href={`https://api.whatsapp.com/send/?phone=51${
                mascota.usuario.celular || mascota.usuario.telefono
              }&text=¡Hola!+&type=phone_number&app_absent=0`}
              target="_blank"
            >
              <Button
                className="bg-orange text-white text-xl py-6 font-bold"
                radius="md"
                startContent={<IoLogoWhatsapp className="text-2xl" />}
              >
                Responsable 1
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
