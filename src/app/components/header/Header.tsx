import Image from "next/image";

const Header = () => {
  return (
    <header className=" content-center relative h-[200px] sm:h-[250px] lg:h-[300px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/festivalperezoso.jpeg"
          alt="Festival del Oso Perezoso"
          layout="fill"
          objectFit="cover"
          className="animated-background"
        />
      </div>
      <div className="text-center content-center rounded-lg bg-white bg-opacity-30  backdrop-blur-md">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Poppins] drop-shadow-lg">
          Festival del Perezoso 2024
        </h1>
        <h2 className="mt-4 text-lg sm:text-xl lg:text-2xl font-[Poppins] drop-shadow-md">
          Celebrando la conservación y la naturaleza
        </h2>
      </div>
    </header>
  );
};

export default Header;
