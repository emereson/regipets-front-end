import Image from "next/image";

export default function NoQueremosMasMascotas() {
  return (
    <section className="relative bg-white   flex flex-col  items-center gap-10 rounded-t-[80px] mt-[-80px]  px-6 pt-14 pb-[50px]">
      <h2 className="text-4xl text-center text-gray font-[SegoeUiBlack] italic">
        “No queremos más mascotas perdidas <br /> y decidimos hacer un cambio”
      </h2>
      <div className="flex flex-col gap-6 text-center">
        <p className="text-2xl  text-neutral-600 font-light">
          REGIPETS nació en 2018 como RUMP (Registro Único de <br /> Mascotas
          del Perú) con una misión clara: usar la tecnología <br /> para que
          ninguna mascota se quede sin hogar.
        </p>
        <p className="text-2xl  text-neutral-600 font-light">
          En 7 años hemos logrado registrar más de 200,000 mascotas <br /> en
          todo el Perú, convirtiéndonos en la plataforma de <br />
          identificación más grande del país
        </p>
        <p className="text-2xl  text-neutral-600 font-light">
          En 2025 evolucionamos a REGIPETS para expandir nuestro <br />
          alcance internacional y ofrecer nuevas funciones avanzadas <br /> que
          hacen la diferencia: notificaciones instantáneas, <br />{" "}
          geolocalización y una red de veterinarias aliadas.
        </p>
      </div>
      <Image
        className="w-full max-w-4xl"
        src="/quienesSomos/pets.png"
        alt="Banner de inicio"
        width={3000}
        height={1000}
        priority
      />
    </section>
  );
}
