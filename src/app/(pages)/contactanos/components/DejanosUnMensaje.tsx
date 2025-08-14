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
  };

  return (
    <section className="relative bg-white flex flex-col items-center gap-16 rounded-t-[60px] mt-[-60px] px-6 py-20 max-sm:rounded-t-4xl max-sm:px-4 max-sm:pb-0 max-sm:pt-4">
      <div className="relative w-full max-w-4xl m-auto flex flex-col overflow-hidden pt-10 pb-14 max-sm:pb-0">
        <h2 className="text-title text-gray font-[SegoeUiBlack]">
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
          className="absolute bottom-0 right-[-10px]  w-[430px]  max-sm:relative  max-sm:w-[300px] max-sm: mt-10"
          src="/contactanos-regipets.png"
          alt="contactanos"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
