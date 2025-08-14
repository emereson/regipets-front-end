"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Loading from "../components/Loading";

type BuscarMascota = {
  dniOrChip: string;
};
export default function EncontreUnaMascota() {
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
    <section className="p-10 text-white font-[ArialRoundedmtBold]  max-sm:px-4">
      {loading && <Loading />}

      <div
        className="relative w-full max-w-[950px]   m-auto bg-blue flex flex-col rounded-4xl px-20 pt-20 pb-12 gap-4 shadow-2xl shadow-neutral-500
      max-sm:px-6 max-sm:py-10"
      >
        <div className=" flex flex-col gap-6">
          <h2 className="font-[SegoeUiBlack] text-title text-nowrap">
            Encontré una mascota
          </h2>
          <p className="text-xl font-light">
            Ingresa el código Regipets o <br /> número de Microchip para <br />
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
        </div>
        <Image
          className="absolute  h-[450px] w-fit top-[-20px] right-[130px] max-sm:relative max-sm:h-[330px]  max-sm:right-0 max-sm:top-[73px] max-sm:m-auto max-sm:-mt-10"
          src="/inicio/animalitos1.png"
          alt="Banner de inicio"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
