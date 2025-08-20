"use client";

import { useCartStore } from "@/store/cartStore";
import { useCartUIStore } from "@/store/cartUIStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { TiMinus, TiPlus } from "react-icons/ti";

export default function Cart() {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();
  const { isOpen, closeCart } = useCartUIStore();

  const cartRef = useRef<HTMLDivElement>(null);

  // ⬇️ Detectar clics fuera del carrito
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        closeCart();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeCart]);

  return (
    <section
      className={`fixed right-0 top-0 h-screen w-screen bg-[#0d2a606a] z-[70] p-2 flex justify-end
        ${isOpen ? "translate-x-[0]" : "translate-x-[120%]"} duration-300
        `}
    >
      <div
        ref={cartRef}
        className={`
           h-full w-full max-w-[400px]  rounded-2xl   bg-white flex flex-col items-end  overflow-hidden  `}
      >
        <section className="w-full flex flex-col gap-1 bg-zinc-50 p-3 pt-5 pb-5">
          <div className="w-full flex justify-between ">
            <h2 className="font-[SegoeUiBlack] text-gray text-lg">
              Carrito de Compras
            </h2>
            <button
              className="cursor-pointer -mt-3"
              name="cerrar carrito"
              type="button"
            >
              <IoClose
                onClick={closeCart}
                className=" text-[30px] text-neutral-500 bg-neutral-100 rounded-full p-1 "
              />
            </button>
          </div>
          <article className="bg-blue rounded-lg flex items-center gap-3 p-4">
            <span className="text-title">🔥</span>
            <div className="flex flex-col text-white">
              <h3 className=" font-[SegoeUiBlack] text-sm">Tu Compra Segura</h3>
              <p className="text-xs tracking-normal">
                Exige tu boleta o factura para mayor seguridad
              </p>
            </div>
          </article>
        </section>

        <div className="w-full flex-grow overflow-y-auto p-3 pt-10  space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Tu carrito está vacío.
            </p>
          ) : (
            cart.map((producto) => (
              <article
                key={producto.id}
                className="w-full flex gap-4 items-center"
              >
                <Image
                  className="w-24 h-24"
                  src={producto.mas_imagenes[0].ruta_imagen || "/"}
                  alt="producto"
                  width={500}
                  height={500}
                />
                <div className="w-full flex items-center   gap-4">
                  <section className="w-full flex flex-col justify-between  gap-3 text-gray">
                    <h4 className="font-[SegoeUiBlack] text-[12px] text-base/4">
                      {producto.nombre}
                    </h4>

                    <div className="w-min flex items-center gap-2 bg-neutral-200 rounded-full text-sm">
                      <button
                        className="p-1.5 text-[9px]  rounded-md bg-orange text-white  cursor-pointer "
                        onClick={() => decreaseQuantity(producto.id)}
                      >
                        <TiMinus />
                      </button>
                      <span className="font-medium  w-2 text-xs text-center text-black">
                        {producto.quantity}
                      </span>
                      <button
                        className="p-1.5 text-[9px]  rounded-md bg-orange text-white  cursor-pointer "
                        onClick={() => increaseQuantity(producto.id)}
                      >
                        <TiPlus />
                      </button>
                    </div>
                  </section>
                  <section className="flex flex-col gap-3  text-nowrap">
                    <button
                      className="p-0 text-start text-[11px]  font-semibold text-[#ff610a]  underline"
                      onClick={() => removeFromCart(producto.id)}
                    >
                      Eliminar
                    </button>
                    <span className="font-[SegoeUiBlack] text-gray text-xs">
                      S/ {(producto.precio * producto.quantity).toFixed(2)}
                    </span>
                  </section>
                </div>
              </article>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <footer
            className="w-full p-4 font-[SegoeUiBlack]  text-gray flex flex-col gap-4"
            style={{ boxShadow: "0 0 15px 5px #dedfe1" }}
          >
            <div className="w-full flex justify-between items-center font-bold ">
              <span>Subtotal:</span>
              <span> S/{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <Link
                className="w-full border-2 px-4 py-2.5 rounded-xl text-nowrap text-center text-sm transition-all duration-300   hover:bg-neutral-600 hover:text-white "
                href="/carrito-compras"
                onClick={closeCart}
              >
                VER CARRITO
              </Link>
              <Link
                className="w-full bg-orange px-4 py-2.5 rounded-xl text-nowrap text-center text-sm text-white transition-all duration-300    hover:shadow-lg"
                href="/finalizar-compra"
                onClick={closeCart}
              >
                PAGAR AHORA
              </Link>
            </div>
            <button className="text-xs underline"> O SEGUIR COMPRANDO</button>
          </footer>
        )}
      </div>
    </section>
  );
}
