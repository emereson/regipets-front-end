"use client";

import BannerPages from "@/app/components/BannerPages";
import { Mascota } from "@/interfaces/mascota.interface";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DatosMascota from "./components/DatosMascota";
import Loading from "@/app/components/Loading";

export default function MascotaId() {
  const router = useRouter();

  const params = useParams();
  const id = params?.id as string;
  const [loading, setLoading] = useState<boolean>(false);

  const [mascota, setMascota] = useState<Mascota | null>();
  console.log(mascota);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/mascota/${id}`)
      .then((res) => setMascota(res.data.mascota))
      .catch(() => router.push("/"))
      .finally(() => setLoading(false));
  }, [id, router]);

  return (
    <main>
      {loading && <Loading />}
      <BannerPages title="Resultado de Búsqueda" />
      {mascota && <DatosMascota mascota={mascota} />}
    </main>
  );
}
