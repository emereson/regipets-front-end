"use client";

import { inputClassNames } from "@/utils/classNames";
import { Input, Textarea } from "@heroui/react";
import Image from "next/image";
import React, { FormEvent } from "react";

interface ContactanosData {
  nombre: string;
  correo: string;
  mensaje: string;
}

export default function DejanosUnMensaje() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // importante para evitar recarga
    const formData = new FormData(e.currentTarget);

    const data: ContactanosData = {
      nombre: formData.get("nombre") as string,
      correo: formData.get("correo") as string,
      mensaje: formData.get("mensaje") as string,
    };

    console.log(data);
    // Aquí puedes hacer fetch o axios para enviar los datos
  };

  return (
    <section className="relative  bg-white   flex flex-col  items-center gap-10 rounded-t-[80px] mt-[-80px]  px-6 pt-14 pb-[50px]">
      <div className="relative w-full max-w-4xl m-auto flex flex-col overflow-hidden pt-10 pb-14">
        <h2 className="text-4xl text-gray font-[SegoeUiBlack]">
          Déjanos un Mensaje
        </h2>
        <form className="w-sm flex flex-col gap-2" onSubmit={onSubmit}>
          <Input
            classNames={inputClassNames}
            isRequired
            label="Nombre"
            labelPlacement="outside"
            errorMessage="El nombre es obligatorio"
            name="nombre"
            variant="bordered"
            radius="sm"
          />
          <Input
            classNames={inputClassNames}
            isRequired
            label="Correo"
            labelPlacement="outside"
            errorMessage="El correo es obligatorio"
            name="correo"
            variant="bordered"
            radius="sm"
          />
          <Textarea
            classNames={inputClassNames}
            isRequired
            label="Mensaje"
            labelPlacement="outside"
            errorMessage="El mensaje es obligatorio"
            name="nombre"
            variant="bordered"
            radius="sm"
          />

          <button
            className="w-min mt-8 bg-orange text-nowrap text-lg font-[SegoeUiBlack] text-white px-4 py-2 rounded-full"
            type="submit"
          >
            Enviar Mensaje
          </button>
        </form>
        <Image
          className="absolute bottom-0 right-[-10px]  w-[450px] "
          src="/dog.jpg"
          alt="Banner de inicio"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
