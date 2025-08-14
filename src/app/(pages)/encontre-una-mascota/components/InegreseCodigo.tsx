"use client";

import Loading from "@/app/components/Loading";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type BuscarMascota = {
  dniOrChip: string;
};

export default function InegreseCodigo() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<BuscarMascota>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: BuscarMascota) => {
    setLoading(true);
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/mascota/buscar/${data.dniOrChip}`
      )
      .then((res) => router.push(`/mascota/${res.data.mascota.id}`))
      .catch((err) => toast.error(err.response.data.error))
      .finally(() => setLoading(false));
  };
  return (
    <section className="relative h-auto  bg-white  rounded-t-[60px] mt-[-60px]  px-6 max-sm:rounded-t-4xl max-sm:px-4">
      {loading && <Loading />}

      <div className="w-full max-w-3xl m-auto flex items-center gap-4 max-sm:flex-col max-sm:py-10">
        <section className="w-min flex flex-col gap-4 -mt-10 max-sm:-mt-0 max-sm:w-full">
          <h2 className="text-title text-gray font-[SegoeUiBlack]  text-nowrap">
            Encontré una mascota
          </h2>
          <p className=" text-2xl text-neutral-500 text-nowrap">
            Ingresa el código Regipets o <br /> número de Microchip para <br />{" "}
            identificar y ubicar a la familia
          </p>
          <form
            className="relative w-[310px] flex items-center pt-6 max-sm:w-full max-sm:pt-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              required
              className="w-full  h-14  bg-white  text-sm text-neutral-700 tracking-tighter p-3 rounded-3xl  shadow-md shadow-neutral-400 border-t-1 border-neutral-100
              max-sm:text-xs
              "
              type="text"
              {...register("dniOrChip")}
              placeholder="Ingresa el código RUMP o MICROCHIP"
            />
            <button className="absolute  -right-10 p-4  h-16 text-white  text-lg  flex items-center bg-orange rounded-4xl   cursor-pointer  max-sm:text-base max-sm:-right-2">
              Buscar
            </button>
          </form>
        </section>
        <Image
          className="w-[430px] max-sm:w-[300px]"
          src="/olfatoPet.png"
          alt="Banner de inicio"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
