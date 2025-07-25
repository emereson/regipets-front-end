"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-screen px-10 z-[100] font-[SegoeUiBlack] text-white transition-colors duration-[0.7s] ${
        isScrolled ? "bg-blue shadow-lg shadow-[#0000002b]" : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1400px] m-auto flex justify-between items-center">
        <Link href="/" onClick={() => setOpenMenu(false)}>
          <Image
            className="w-26"
            src="/identidadVisual/Logo-Regipets-blanco-01.png"
            alt="Banner de inicio"
            width={800}
            height={800}
          />
        </Link>
        <div className="flex gap-4 pr-10">
          <button className="relative w-14 h-12 bg-orange flex flex-col items-center justify-center gap-2 rounded-3xl cursor-pointer z-20">
            <TiShoppingCart className="text-white text-4xl" />
          </button>
          <button
            className="relative w-14 h-12 bg-white flex flex-col items-center justify-center gap-2 rounded-3xl cursor-pointer z-20"
            onClick={toggleMenu}
          >
            <span
              className={`block w-7 h-1 rounded-lg bg-blue ${
                openMenu ? "rotate-45 absolute" : ""
              } duration-250`}
            ></span>
            <span
              className={`block w-7 h-1 rounded-lg bg-blue ${
                openMenu ? "-rotate-45 absolute" : ""
              } duration-250`}
            ></span>
          </button>
        </div>

        <nav
          className={`fixed   z-10 top-0 right-0 h-screen w-[340px] bg-blue pt-[150px] flex flex-col items-end gap-4 pr-16 text-xl ${
            openMenu ? " box-shadowMenu" : "translate-x-full "
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
