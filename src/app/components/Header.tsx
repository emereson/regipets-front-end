"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, []);

  return (
    <header className="fixed top-0 w-screen px-10 z-[100] font-[SegoeUiBlack] text-white">
      <div className="w-full max-w-[1400px] m-auto flex justify-between items-center">
        <Link href="/" onClick={() => setOpenMenu(false)}>
          <Image
            className="w-30"
            src="/identidadVisual/Logo-Regipets-blanco-01.png"
            alt="Banner de inicio"
            width={800}
            height={800}
          />
        </Link>
        <div className="pr-10">
          <button
            className="relative w-14 h-12 bg-blue flex flex-col items-center justify-center gap-2 rounded-3xl cursor-pointer z-20"
            onClick={toggleMenu}
          >
            <span
              className={`block w-7 h-1 rounded-lg bg-white ${
                openMenu ? "rotate-45 absolute" : ""
              } duration-250`}
            ></span>
            <span
              className={`block w-7 h-1 rounded-lg bg-white ${
                openMenu ? "-rotate-45  absolute" : ""
              } duration-250`}
            ></span>{" "}
          </button>
        </div>

        <nav
          className={`fixed z-10 top-0 right-0 h-screen w-[340px] bg-blue pt-[150px]  flex flex-col items-end gap-4 pr-16 text-xl ${
            openMenu ? "" : "translate-x-full"
          } duration-250`}
        >
          <Link href="/quienes-somos" onClick={() => setOpenMenu(false)}>
            ¿Quiénes Somos?
          </Link>
          <Link href="/contactanos" onClick={() => setOpenMenu(false)}>
            Contáctanos
          </Link>
        </nav>
      </div>
    </header>
  );
}
