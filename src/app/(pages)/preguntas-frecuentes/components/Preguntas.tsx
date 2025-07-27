"use client";

import { useState } from "react";
import { preguntasRespuestas, secciones } from "../data/preguntasRespuestas";
import { Accordion, AccordionItem } from "@heroui/react";

export default function Preguntas() {
  const [seccionId, setseccionId] = useState(1);

  const preguntasSeccionId = preguntasRespuestas.filter(
    (item) => item.seccion_id === seccionId
  );

  return (
    <section className="relative bg-white flex flex-col items-center gap-16 rounded-t-[60px] mt-[-60px] px-6 py-20">
      <div className="w-full max-w-5xl flex gap-14">
        <ul className="flex flex-col gap-4">
          {secciones.map((item) => (
            <li
              key={item.id}
              onClick={() => setseccionId(item.id)}
              className={` w-min
                relative cursor-pointer text-base font-semibold text-nowrap transition-colors duration-300
                ${seccionId === item.id ? "text-black" : "text-neutral-400"}
              `}
            >
              {item.title}
              <span
                className={`
                  absolute bottom-0 left-0 h-[2px] bg-black transition-all duration-300
                  ${seccionId === item.id ? "w-full" : "w-0"}
                `}
              />
            </li>
          ))}
        </ul>
        <Accordion
          className="w-full"
          variant="splitted"
          itemClasses={{ title: "text-lg font-semibold" }}
        >
          {preguntasSeccionId.map((item) => (
            <AccordionItem
              key={item.id}
              aria-label={item.preguntas}
              title={item.preguntas}
              className="shadow-none border-2 border-[#e8e8e8]"
            >
              <p className="text-gray text-medium">{item.respuesta}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
