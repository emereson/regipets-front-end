"use client";

import BannerPages from "@/app/components/BannerPages";
import { useCartStore } from "@/store/cartStore";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Cliente {
  nombre_apellidos: string;
  celular: string;
  dni: string;
  email: string;
  direccion: string;
  referencia: string;
  departamento: string;
  provincia: string;
  distrito: string;
}

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  quantity: number;
}

interface Pedido {
  id: number;
  cliente: Cliente;
  productos: Producto[];
  status: string;
  sub_total: number;
  costo_envio: number;
  total: number;
}

export default function SuccesId() {
  const { clearCart } = useCartStore();
  const params = useParams();
  const id = params?.id as string;
  const [pedido, setPedido] = useState<Pedido | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/pedido/${id}`)
      .then((res) => {
        setPedido(res.data.pedido);
        clearCart();
      })
      .catch((err) => console.error("Error cargando pedido:", err))
      .finally(() => setLoading(false));
  }, [id, clearCart]);

  if (loading) {
    return <p className="text-center py-10">Cargando información...</p>;
  }

  if (!pedido) {
    return <p className="text-center py-10">No se encontró el pedido.</p>;
  }

  return (
    <main>
      <BannerPages title="🎉 ¡Gracias por tu compra!" />

      <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 mt-6 px-4">
        {/* Productos */}
        <div className="flex-1 bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            🛒 Productos de tu pedido
          </h2>
          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Producto</th>
                <th className="p-2 text-center">Cantidad</th>
                <th className="p-2 text-center">Precio</th>
                <th className="p-2 text-center">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {pedido.productos.map((prod) => (
                <tr key={prod.id} className="border-t">
                  <td className="p-2">{prod.nombre}</td>
                  <td className="p-2 text-center">{prod.quantity}</td>
                  <td className="p-2 text-center">S/ {prod.precio}</td>
                  <td className="p-2 text-center">
                    S/ {prod.precio * prod.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Datos del cliente */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">
              👤 Información del Cliente
            </h3>
            <p>
              <strong>Nombre:</strong> {pedido.cliente?.nombre_apellidos}
            </p>
            <p>
              <strong>DNI:</strong> {pedido.cliente?.dni}
            </p>
            <p>
              <strong>Email:</strong> {pedido.cliente?.email}
            </p>
            <p>
              <strong>Celular:</strong> {pedido.cliente?.celular}
            </p>
            <p className="mt-2">
              <strong>Dirección:</strong> {pedido.cliente?.direccion}
            </p>
            <p>
              {pedido.cliente?.distrito}, {pedido.cliente?.provincia},{" "}
              {pedido.cliente?.departamento}
            </p>
            <p>
              <strong>Referencia:</strong> {pedido.cliente?.referencia}
            </p>
          </div>
        </div>

        {/* Totales (sidebar estilo carrito) */}
        <aside className="w-full md:w-80 bg-white shadow-md rounded-xl p-6 h-fit">
          <h3 className="text-lg font-semibold mb-4">Mi Orden</h3>
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal</span>
            <span>S/ {pedido.sub_total}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span>Envío</span>
            <span>S/ {pedido.costo_envio}</span>
          </div>
          <div className="flex justify-between py-2 border-b font-bold text-lg">
            <span>Total</span>
            <span>S/ {pedido.total}</span>
          </div>
          <p className="mt-4 text-green-600 font-semibold text-center">
            ✅ Estado: {pedido.status.toUpperCase()}
          </p>
        </aside>
      </section>
    </main>
  );
}
