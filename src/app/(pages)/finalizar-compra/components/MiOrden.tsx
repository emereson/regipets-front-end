"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MiOrden() {
  const [isMounted, setIsMounted] = useState(false);

  const { cart, totalPrice, deliveryCost, getFinalTotal } = useCartStore();

  // Ensure component only renders on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formatPrice = (price: number) => {
    return Number(price).toFixed(2);
  };

  if (!isMounted) {
    return (
      <section className="min-w-[350px]">
        <h2 className="text-2xl font-bold mb-2">Mi Orden</h2>
        <div className="w-full flex-grow overflow-y-auto p-3 pt-10 space-y-4">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-20 bg-gray-200 rounded mb-4"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-w-[350px] space-y-4 max-sm:min-w-0 pb-10">
      <h2 className="text-2xl font-bold mb-2">Mi Orden</h2>
      <div className="w-full flex-grow overflow-y-auto   space-y-4">
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
                  <h4 className="font-bold text-[12px] ">{producto.nombre}</h4>
                </section>
                <section className="flex flex-col gap-3  text-nowrap">
                  <span
                    className="font-bold text-gray text-xs"
                    suppressHydrationWarning={true}
                  >
                    S/ {formatPrice(producto.precio * producto.quantity)}
                  </span>
                </section>
              </div>
            </article>
          ))
        )}
      </div>
      <ul className="space-y-4 mt-6">
        <li className="grid grid-cols-2 border-b-1 border-gray-400 pb-2">
          <p className="text-sm font-bold ">Subtotal:</p>
          <p
            className="text-sm font-bold text-[#565656]"
            suppressHydrationWarning={true}
          >
            S/ {formatPrice(totalPrice)}
          </p>
        </li>
        <li className="grid grid-cols-2 border-b-1 border-gray-400 pb-2">
          <p className="text-sm font-bold ">Descuento:</p>
          <p className="text-sm font-bold text-[#565656]">-S/ 0.00</p>
        </li>
        <li className="grid grid-cols-2 border-b-1 border-gray-400 pb-2">
          <p className="text-sm font-bold">Envío</p>
          <p
            className="text-sm font-bold text-[#565656]"
            suppressHydrationWarning={true}
          >
            S/ {formatPrice(deliveryCost)}
          </p>
        </li>
        <li className="grid grid-cols-2 ">
          <p className="text-medium font-bold">Total</p>
          <p
            className="text-medium font-bold text-[#565656]"
            suppressHydrationWarning={true}
          >
            S/ {formatPrice(getFinalTotal())}
          </p>
        </li>
      </ul>
    </section>
  );
}
