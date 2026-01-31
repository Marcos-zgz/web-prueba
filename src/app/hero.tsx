"use client";

function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          {/* TÍTULO PRINCIPAL */}
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 leading-tight">
            ¿Buscas claridad?
          </h1>
          
          {/* SUBTÍTULO */}
          <p className="mt-6 mb-12 text-xl md:text-2xl italic text-slate-600 max-w-2xl">
            "Une tu intuición y estrategia"
          </p>

          {/* SEPARADOR DECORATIVO */}
          <div className="w-12 h-px bg-slate-300 mb-12"></div>

          {/* REDES SOCIALES (Limpiadas para el estilo de Mayka) */}
          <p className="mb-4 text-xs tracking-[0.3em] uppercase opacity-50">
            Conecta conmigo
          </p>
          <div className="flex gap-6 justify-center">
            <a href="https://wa.me/34644267361" target="_blank" className="hover:opacity-60 transition-opacity">
              <i className="fa-brands fa-whatsapp text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:opacity-60 transition-opacity">
              <i className="fa-brands fa-instagram text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
