'use client'
import Image from "next/image";
import { useState } from "react";
import Footer from "./components/footer/Footer"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias por registrarte, ${formData.name}!`);
    // Lógica de registro
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#e9e4db] fade-in">
      {/* Encabezado con imagen */}
      <header className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
        <Image
          src="/festivalperezoso.jpeg"
          alt="Festival del Oso Perezoso"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Poppins]">
            ¡Bienvenido al Festival del Oso Perezoso!
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-[Poppins]">
            Celebrando la conservación y la naturaleza
          </p>
        </div>
      </header>

      {/* Sección de Registro */}
      <section className="max-w-lg mx-auto bg-[#f5f1e3] p-6 rounded-lg shadow-md mt-12 hover-grow">
        <h2 className="text-2xl font-bold text-[#965a37] mb-4">Regístrate</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-3 rounded-md border border-gray-300"
            placeholder="Tu nombre"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-3 rounded-md border border-gray-300"
            placeholder="Tu email"
            required
          />
          <button
            type="submit"
            className="bg-[#965a37] text-white font-semibold py-3 rounded-md hover:bg-[#7a462d] transition-all hover-grow"
          >
            Registrarse
          </button>
        </form>
      </section>

      {/* Sección de Catálogo de Productos */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center text-[#527a63] mb-6">Productos Disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-lg shadow-md hover-grow transition-all">
            <Image
              src="/festivalperezoso.jpeg"
              alt="Producto orgánico"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Comida Orgánica</h3>
            <p className="text-[#965a37]">$15</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover-grow transition-all">
            <Image
              src="/festivalperezoso.jpeg"
              alt="Artesanías"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Artesanías</h3>
            <p className="text-[#965a37]">$30</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover-grow transition-all">
            <Image
              src="/festivalperezoso.jpeg"
              alt="Adopta un árbol"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Adopta un Árbol</h3>
            <p className="text-[#965a37]">$25</p>
          </div>
        </div>
      </section>

      {/* Sección de Historias */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center text-[#527a63] mb-6">Historias Inspiradoras</h2>
        <div className="bg-[#f5f1e3] p-6 rounded-lg shadow-md hover-grow">
          <p className="text-lg text-[#965a37]">
            Aprende sobre cómo nuestro festival contribuye a la conservación de los osos perezosos
            y cómo tú también puedes hacer la diferencia. Cada año, trabajamos con comunidades para
            reforestar y proteger su hábitat natural.
          </p>
        </div>
      </section>

      <footer className="text-center py-8">
      <Footer/>
      </footer>
    </div>
  );
}
