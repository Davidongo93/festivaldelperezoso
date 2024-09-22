import Image from "next/image";
import { useState, useEffect } from "react";

// Ejemplo de array de productos ampliado
const productos = [
  { nombre: "Comida Orgánica", precio: "$15", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Artesanías", precio: "$30", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Adopta un Árbol", precio: "$25", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Café Ecológico", precio: "$10", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Miel Natural", precio: "$20", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Té de Hierbas", precio: "$8", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Velas Artesanales", precio: "$12", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Jabones Naturales", precio: "$5", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Ropa Orgánica", precio: "$35", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Plantitas", precio: "$7", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Aceites Esenciales", precio: "$18", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Juguetes Reciclados", precio: "$22", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Bisutería Artesanal", precio: "$28", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Frutas Frescas", precio: "$5", imagen: "/festivalperezoso.jpeg" },
  { nombre: "Hierbas Medicinales", precio: "$9", imagen: "/festivalperezoso.jpeg" },
];

const CarruselProductos = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleNext = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === productos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? productos.length - 1 : prevIndex - 1
    );
  };

  // Comportamiento automático
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Cambiar cada 5 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  // Calcular los productos visibles basados en el tamaño de la pantalla
  const visibleProducts = (screenWidth: number) => {
    if (screenWidth >= 1024) {
      return 3; // 3 productos en pantallas grandes
    } else if (screenWidth >= 640) {
      return 2; // 2 productos en pantallas medianas
    } else {
      return 1; // 1 producto en pantallas pequeñas
    }
  };

  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1024;
  const productsToShow = visibleProducts(screenWidth);
  const visibleProductIndices = Array.from(
    { length: productsToShow },
    (_, i) => (currentProductIndex + i) % productos.length
  );

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center text-[#527a63] mb-6">Productos Disponibles</h2>
      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-4 bg-[#527a63] text-white p-2 rounded-full hover:bg-[#3b614d] transition-all"
        >
          {"<"}
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
          {visibleProductIndices.map((index) => {
            const product = productos[index];
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover-grow transition-all"
              >
                <Image
                  src={product.imagen}
                  alt={product.nombre}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4 text-[#527a63]">
                  {product.nombre}
                </h3>
                <p className="text-[#965a37]">{product.precio}</p>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-4 bg-[#527a63] text-white p-2 rounded-full hover:bg-[#3b614d] transition-all"
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default CarruselProductos;
