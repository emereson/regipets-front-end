"use client";

import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Carga del script de LightWidget de forma dinámica
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="w-full">
      <div
      // dangerouslySetInnerHTML={{
      //   __html: `
      //       <iframe
      //         src="//lightwidget.com/widgets/6ca79ee2e44954408d2f5bc61cbab73d.html"
      //         scrolling="no"
      //         allowtransparency="true"
      //         class="lightwidget-widget"
      //         style="width:100%;border:0;overflow:hidden;">
      //       </iframe>
      //     `,
      // }}
      />
    </div>
  );
}
