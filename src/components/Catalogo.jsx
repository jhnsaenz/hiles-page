import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

// Generamos 50 productos automáticamente
const productos = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  nombre: `Bolso ${["Sol", "Tierra", "Raíz", "Luna", "Cielo", "Arena", "Nube", "Brisa", "Flor", "Mar"][i % 10]}`,
  categoria: ["Pequeño", "Mediano", "Grande"][i % 3],
  imagen: `/images/bolso${(i % 20) + 1}.jpg`,
  precio: Math.floor(Math.random() * 81) + 20,
  popularidad: Math.floor(Math.random() * 5) + 1,
}));

const Catalogo = () => {
  const [busqueda, setBusqueda] = useState("");
  const [precioMaximo, setPrecioMaximo] = useState(100);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      producto.precio <= precioMaximo
  );

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.on("slideChange", () => {
        const { isBeginning, isEnd } = swiperInstance;
        swiperInstance.navigation.prevEl.disabled = isBeginning;
        swiperInstance.navigation.nextEl.disabled = isEnd;
      });
    }
  }, [swiperInstance]);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-[#5C4033]">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#f3e8dd] font-[Great_Vibes]">
        Nuestro Catálogo
      </h2>

      {/* Filtros */}
      <div className="mb-8 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <input
          id="busqueda"
          type="text"
          placeholder="Buscar producto"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="border border-[#a0845c] p-2 rounded w-full sm:w-1/2"
          aria-label="Buscar productos por nombre"
          role="search"
        />

        <div className="w-full sm:w-auto flex flex-col items-start">
          <label htmlFor="precio" className="text-sm font-medium mb-1 text-[#f3e8dd]">
            Rango de precio:
          </label>
          <input
            id="precio"
            type="range"
            min="0"
            max="100"
            value={precioMaximo}
            onChange={(e) => setPrecioMaximo(Number(e.target.value))}
            className="w-full sm:w-64"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={precioMaximo}
            aria-label="Filtrar por precio máximo"
          />
          <p className="text-sm text-[#f3e8dd] mt-1">Hasta ${precioMaximo}</p>
        </div>
      </div>

      {/* Carrusel de productos */}
      {productosFiltrados.length === 0 ? (
        <div className="text-center py-10 text-[#f3e8dd]">
          <p>No se encontraron productos.</p>
        </div>
      ) : (
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={false} // Desactivamos los bullets
          modules={[Navigation, Pagination]}
          onSwiper={setSwiperInstance}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }, // Aquí fijamos 3 productos para escritorio
          }}
          className="mySwiper !pb-10"
        >
          {productosFiltrados.map((producto) => (
            <SwiperSlide key={producto.id}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-md bg-[#fefaf5] border border-[#a0845c] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#5C4033] mb-1">
                    {producto.nombre}
                  </h3>
                  <p className="text-sm text-[#7b5e43] italic mb-1">{producto.categoria}</p>
                  <p className="text-lg font-semibold text-[#5C4033]">${producto.precio}</p>
                  <p className="text-sm text-[#7b5e43]">{producto.popularidad} ⭐</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Catalogo;




