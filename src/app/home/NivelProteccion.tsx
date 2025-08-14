"use client";

import { products } from "@/data/productos";
import { useCartStore } from "@/store/cartStore";
import { Button, Card, CardBody, CardFooter, Tab, Tabs } from "@heroui/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NivelProteccion() {
  const { addToCart } = useCartStore();

  const [selected, setSelected] = useState<string>("Todos");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // Estado para imagen principal por producto
  const [mainImages, setMainImages] = useState<Record<number, string>>({});

  // Filtrado
  const filteredProducts =
    selected === "Todos"
      ? products
      : products.filter((item) => item.categoria === selected);

  // Cambiar imagen principal con animación
  const handleImageClick = (productId: number, newImage: string) => {
    setMainImages((prev) => ({
      ...prev,
      [productId]: newImage,
    }));
  };

  return (
    <section className="w-full flex flex-col items-center gap-10 px-6 py-14 max-sm:px-4">
      <h2 className="font-[SegoeUiBlack] text-title text-[#565656] text-center">
        Elige tu nivel de protección
      </h2>
      <Tabs
        className=" font-[SegoeUiBlack]"
        classNames={{
          tabList:
            "bg-white shadow-md shadow-neutral-400 rounded-lg max-sm:flex-wrap max-sm:justify-center",
          tab: "max-w-fit border-white px-8 h-9 overflow-hidden ",
          tabContent:
            "group-data-[selected=true]:text-[#565656] text-[#9a9a9a] text-xl",
        }}
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(String(key))}
      >
        <Tab key="Todos" title="Todos" />
        <Tab key="Clásico" title="Clásico" />
        <Tab key="Premium" title="Premium" />
        <Tab key="Súper Premium" title="Súper Premium" />
      </Tabs>
      <div className="flex gap-3 max-sm:flex-col max-sm:gap-6">
        {filteredProducts.map((producto) => {
          const currentImage =
            mainImages[producto.id] || producto.mas_imagenes[0].ruta_imagen;

          return (
            <Card
              key={producto.id}
              className={`w-[280px] bg-transparent shadow-none hover:shadow-sm overflow-hidden transition-all duration-300 ${
                hoveredProduct === producto.id ? "h-[470px]" : "h-[430px]"
              }`}
              shadow="sm"
              onMouseEnter={() => setHoveredProduct(producto.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardBody className="overflow-visible p-0 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage} // 🔹 Esto fuerza la animación cuando cambia la imagen
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Image
                      className="w-full h-[327px] rounded-xl object-cover"
                      src={currentImage}
                      alt={producto.nombre}
                      width={600}
                      height={600}
                    />
                  </motion.div>
                </AnimatePresence>
              </CardBody>
              <CardFooter className="overflow-hidden w-full h-full text-small flex-col items-start justify-between gap-2 text-gray">
                {/* Miniaturas */}
                <div
                  className={`h-0 flex gap-0.5 transition-all duration-300 ease-in-out transform ${
                    hoveredProduct === producto.id
                      ? "opacity-100 translate-x-0 flex h-auto"
                      : "opacity-0 -translate-x-full  pointer-events-none"
                  }`}
                >
                  {producto.mas_imagenes.map((item) => (
                    <Image
                      key={item.id}
                      className="w-7 h-7 hover:border border-neutral-500 rounded-sm transition-all duration-200 cursor-pointer"
                      src={item.ruta_imagen}
                      alt="Miniatura"
                      width={100}
                      height={100}
                      onClick={() =>
                        handleImageClick(producto.id, item.ruta_imagen)
                      }
                    />
                  ))}
                </div>
                <article className="w-full h-full flex flex-col items-start justify-between text-start text-[14px]">
                  <b>{producto.nombre}</b>
                  <div className="w-full flex items-center justify-between">
                    <p className="font-[SegoeUiBlack]">
                      S/ {producto.precio.toFixed(2)}
                    </p>
                    <Button
                      type="button"
                      className="flex items-center justify-center bg-blue text-white cursor-pointer"
                      onPress={() => addToCart(producto)}
                    >
                      Agregar
                    </Button>
                  </div>
                </article>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
