"use client";

import { useCartStore } from "@/store/cartStore";
import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";
import { TiMinus, TiPlus } from "react-icons/ti";

export default function ProductosCarrito() {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCartStore();

  return (
    <section className="relative bg-white flex flex-col items-center gap-16 rounded-t-[60px] mt-[-60px] px-6 py-20 max-sm:rounded-t-4xl max-sm:px-4 max-sm:pb-0 max-sm:pt-4">
      <div className="w-full max-w-4xl m-auto flex gap-10 max-sm:flex-col">
        <section className="w-full flex flex-col  gap-4">
          <article className=" relative bg-blue rounded-lg flex items-center gap-3 p-4 px-10 max-sm:px-6">
            <div
              className="absolute top-0 left-0  w-full h-full opacity-10"
              style={{
                backgroundImage: "url('/identidadVisual/backBlanco-2-01.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "100%",
                backgroundPosition: "top left",
              }}
            ></div>
            <span className="text-title">🔥</span>
            <div className="flex flex-col text-white">
              <h3 className=" font-[SegoeUiBlack] text-lg">Tu Compra Segura</h3>
              <p className="text-medium ">
                Exige tu boleta o factura para mayor seguridad
              </p>
            </div>
          </article>
          <div className="w-full mt-7  overflow-x-auto overflow-y-hidden ">
            <Table
              className="font-[ArialRoundedmtBold] tracking-normal"
              aria-label="Productos del carrito de compras"
              removeWrapper
              radius="none"
            >
              <TableHeader>
                <TableColumn className="text-center text-neutral-900 min-w-[200px]">
                  Productos
                </TableColumn>
                <TableColumn className="text-center text-neutral-900 ">
                  Precio
                </TableColumn>
                <TableColumn className="text-center text-neutral-900 ">
                  Cantidad
                </TableColumn>
                <TableColumn className="text-center text-neutral-900 ">
                  Precio Total
                </TableColumn>
                <TableColumn className="text-center text-neutral-900 ">
                  {" "}
                </TableColumn>
              </TableHeader>
              <TableBody>
                {cart.map((producto) => (
                  <TableRow key={producto.id} className="py-0.5">
                    <TableCell className="text-gray">
                      <div className="flex items-center gap-3">
                        <Image
                          className="w-16 h-16 rounded-sm "
                          src="/inicio/width_550.png"
                          alt="producto"
                          width={500}
                          height={500}
                        />
                        <p className="text-xs">{producto.nombre}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray text-[13px] text-center ">
                      S/ {producto.precio}
                    </TableCell>
                    <TableCell className="text-gray text-[13px] text-center ">
                      {" "}
                      <div className="m-auto w-min flex items-center gap-2 bg-neutral-200 rounded-full text-[13px]">
                        <button
                          className="p-1.5 text-[10px]  rounded-md bg-blue text-white  cursor-pointer "
                          onClick={() => decreaseQuantity(producto.id)}
                        >
                          <TiMinus />
                        </button>
                        <span className="font-medium  w-2 text-sm text-center text-black">
                          {producto.quantity}
                        </span>
                        <button
                          className="p-1.5 text-[10px]  rounded-md bg-blue text-white  cursor-pointer "
                          onClick={() => increaseQuantity(producto.id)}
                        >
                          <TiPlus />
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray text-[13px] text-center ">
                      S/ {(producto.precio * producto.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell className="text-gray text-[13px] text-center ">
                      <button onClick={() => removeFromCart(producto.id)}>
                        <IoCloseCircleOutline className="text-red-500 text-xl" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Divider className="bg-neutral-200 h-0.5 mt-1.5" />

            <form className="relative mt-6  font-[ArialRoundedmtBold] flex items-center">
              <input
                className="w-full  py-2.5 px-4 text-xs text-black placeholder:text-neutral-500   border-1 border-neutral-200 bg-neutral-100 rounded-sm"
                placeholder="Agregar codigo de descuento"
                type="text"
              />
              <Button
                className="absolute right-0  bg-blue text-white text-xs"
                radius="sm"
                type="submit"
              >
                APLICAR
              </Button>
            </form>
          </div>
        </section>
        <section className="bg-neutral-100 p-4 rounded-xl text-nowrap font-[SegoeUiBlack] text-gray flex flex-col justify-between">
          <div>
            <h3 className="text-xl">Mi Orden</h3>
            <article className="mt-6 flex items-center justify-between px-1">
              <h4 className="text-sm">Subtotal</h4>
              <p className="font-[ArialRoundedmtBold] text-medium">
                S/ {totalPrice.toFixed(2)}
              </p>
            </article>
            <Divider className="bg-[#565656] h-0.5 mt-1.5" />
            <article className="mt-4 flex items-center justify-between px-1">
              <h4 className="text-sm">Descuento</h4>
              <p className="font-[ArialRoundedmtBold] text-medium">S/ 0.00</p>
            </article>
            <Divider className="bg-[#565656] h-0.5 mt-4" />

            <article className="mt-2  px-1 flex items-center justify-between ">
              <h4 className="text-medium">Total</h4>
              <p className="font-[ArialRoundedmtBold] text-medium">
                S/ {totalPrice.toFixed(2)}
              </p>
            </article>
          </div>
          <div className="py-4 px-6 flex flex-col items-center gap-4 ">
            <Button
              className="bg-orange px-6 text-white text-medium "
              radius="sm"
              type="submit"
            >
              PAGAR AHORA
            </Button>
            <Link href="/" className="text-xs underline">
              O SEGUIR COMPRANDO
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
