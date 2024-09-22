import { useState } from "react";

const Registro = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias por registrarte, ${formData.name}!`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="max-w-lg mx-auto bg-[#f5f1e3] p-8 rounded-lg shadow-lg mt-12 hover-grow transition-all">
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
          className="bg-[#527a63] text-white font-semibold py-3 rounded-md hover:bg-[#3b614d] transition-all hover-grow"
        >
          Registrarse
        </button>
      </form>
    </section>
  );
};

export default Registro;
