"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
} from "react-icons/fa";

export default function Footer() {
  useEffect(() => {
    // Carga del script de LightWidget de forma dinámica
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="w-full bg-white text-white">
      {/* Instagram Widget Section */}
      <div className="w-full bg-white">
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="//lightwidget.com/widgets/b72dd10625e652cfac79c80bf7f5726d.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
            `,
          }}
        />
      </div>

      {/* Main Footer Content */}
      <section className="w-full px-6 py-10 bg-[#0356ba]">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Regi Pets
                </h3>
                <p className="text-white leading-relaxed mb-6">
                  Tu destino de confianza para productos de mascotas de calidad.
                  Ofrecemos la mejor experiencia de compra con envíos rápidos y
                  atención personalizada para tu mejor amigo.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-[#ff610a] flex-shrink-0" />
                  <span className="text-white">regipets@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-[#ff610a] flex-shrink-0" />
                  <span className="text-white">+51 999 888 777</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-[#ff610a] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white">Lima</p>
                    <p className="text-white text-sm">Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information */}
            <div>
              <h4 className="font-bold mb-6 text-white text-lg uppercase tracking-wide">
                Información
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Contacto", href: "/contacto" },
                  { name: "Nosotros", href: "/nosotros" },
                  { name: "Mi Cuenta", href: "/cuenta" },
                  { name: "Pedidos y Devoluciones", href: "/pedidos" },
                  { name: "Preguntas Frecuentes", href: "/faq" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#ff610a] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Shop */}
            <div>
              <h4 className="font-bold mb-6 text-white text-lg uppercase tracking-wide">
                Tienda Rápida
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Perros", href: "/perros" },
                  { name: "Gatos", href: "/gatos" },
                  { name: "Alimentos", href: "/alimentos" },
                  { name: "Accesorios", href: "/accesorios" },
                  { name: "Blog", href: "/blog" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-[#ff610a] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex justify-between items-center bg-[#0356ba] px-10 pb-10">
        <div className="flex space-x-4">
          <a
            href="#"
            className="w-10 h-10 bg-[#0356ba] hover:bg-[#ff610a] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#0356ba] hover:bg-[#ff610a] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#0356ba] hover:bg-[#ff610a] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="#"
            className="w-10 h-10 bg-[#0356ba] hover:bg-[#ff610a] text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <FaWhatsapp className="text-xl" />
          </a>
        </div>
        <div>
          <p className="text-white text-sm mb-3">Métodos de Pago:</p>
          <div className="flex space-x-3 flex-wrap items-center">
            <div className="p-1 bg-gray-100 rounded-sm hover:bg-gray-200 transition-colors duration-300">
              <FaCcVisa className="text-2xl text-blue-600" />
            </div>
            <div className="p-1 bg-gray-100 rounded-sm hover:bg-gray-200 transition-colors duration-300">
              <FaCcMastercard className="text-2xl text-red-500" />
            </div>
            <div className="p-1 bg-gray-100 rounded-sm hover:bg-gray-200 transition-colors duration-300">
              <FaCcAmex className="text-2xl text-blue-700" />
            </div>
            <div className="p-1 bg-gray-100 rounded-sm hover:bg-gray-200 transition-colors duration-300">
              <FaCcPaypal className="text-2xl text-blue-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="w-full px-6 py-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-black  text-sm">
              <p>&copy;2024 Regi Pets. Todos los derechos reservados.</p>

              {/* Language and Currency */}
              <div className="flex space-x-4">
                <select className="bg-transparent border-none text-black text-sm focus:outline-none cursor-pointer">
                  <option>Español</option>
                  <option>English</option>
                </select>
                <select className="bg-transparent border-none text-black text-sm focus:outline-none cursor-pointer">
                  <option>PEN</option>
                  <option>USD</option>
                </select>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm text-black">
              <Link
                href="/privacidad"
                className="hover:text-[#ff610a] transition-colors duration-300"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="hover:text-[#ff610a] transition-colors duration-300"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
