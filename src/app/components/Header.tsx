"use client";

import { useCartStore } from "@/store/cartStore";
import { useCartUIStore } from "@/store/cartUIStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";

export default function Header() {
  const { toggleCart } = useCartUIStore();
  const { cart } = useCartStore();
  const pathname = usePathname();

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

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-screen px-10 z-[50] font-[SegoeUiBlack] text-white transition-colors duration-[0.7s] ${
        isScrolled ? "bg-blue shadow-lg shadow-[#0000002b]" : "bg-transparent"
      }  max-sm:px-0`}
    >
      <div className="w-full m-auto flex justify-between items-center">
        <Link href="/">
          <Image
            className="w-26 max-sm:w-22"
            src="/identidadVisual/Logo-Regipets-blanco-01.png"
            alt="Banner de inicio"
            width={800}
            height={800}
          />
        </Link>
        <div className="flex gap-4 pr-10 max-sm:pr-4 max-sm:gap-3">
          <button
            className="relative w-14 h-12 bg-orange flex flex-col items-center justify-center gap-2 rounded-3xl cursor-pointer z-20
            max-sm:w-12 max-sm:h-10
            "
            onClick={toggleCart}
          >
            <span className="absolute -top-3 -right-3 bg-black w-7 h-7 flex items-center justify-center text-sm rounded-full">
              {cart.length}
            </span>
            <TiShoppingCart className="text-white text-4xl max-sm:text-3xl" />
          </button>
          <button
            className="relative w-14 h-12 bg-white flex flex-col items-center justify-center gap-2 rounded-3xl cursor-pointer z-20
            max-sm:w-12 max-sm:h-10
            "
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
          className={`fixed   z-10 top-0 right-0 h-screen w-full max-w-[380px] bg-blue pt-[150px] flex flex-col items-end gap-4 pr-16 text-xl ${
            openMenu ? " box-shadowMenu" : "translate-x-full "
          } duration-250`}
        >
          <Link href="/encontre-una-mascota">Encontré una mascota</Link>
          <Link href="/quienes-somos">¿Quiénes Somos?</Link>
          <Link href="/preguntas-frecuentes">Preguntas Frecuentes</Link>
          <Link href="/contactanos">Contáctanos</Link>
        </nav>
      </div>
    </header>
  );
}
