import Image from "next/image";

export default function AnimacionCargaPago() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-[#000000aa] backdrop-blur-sm z-[200] p-8 flex items-center justify-center animate-fadeIn">
      <div className="bg-white w-full max-w-[600px] m-auto p-6 rounded-lg shadow-lg text-center shadow-white animate-scaleIn">
        <Image
          className="w-full max-w-[200px] mx-auto mb-4 animate-imagePulse" // Changed animation name
          src={"/mercadoPago.svg"}
          width={200}
          height={200}
          alt="mercado pago"
        />
        <div className="loader mx-auto mb-4"></div> {/* Spinner element */}
        {/* Animated text */}
        <p className="text-sm font-semibold mt-4 animate-textFadePulse">
          Cargando Mercado Pago...
        </p>
      </div>
    </div>
  );
}
