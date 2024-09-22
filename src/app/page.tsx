'use client';
import Countdown from './components/countdown/Coundown';
import Header from './components/header/Header';
import Registro from './components/registro/Registro';
import CarruselProductos from './components/carruselProductos/CarruselProductos';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e9e4db] fade-in">
      <Header />
        <Countdown />
      <section className="text-center mt-8">
        <h2 className="text-3xl font-bold text-[#527a63] mb-6">
          ¡El festival comienza pronto!
        </h2>
        <p className="text-lg mb-4 text-[#965a37]">
          No te pierdas esta celebración única.
        </p>
      </section>
      <Registro />
      <CarruselProductos />
      <Footer />
    </div>
  );
}
