export default function App() {
  return (
    <>
      <header>
        <nav className="flex justify-center w-full p-5">
          <img src="logo-light.svg" alt="Logo da empresa" width={180} />
          <div className="antialiased text-2xl font-light flex gap-8 my-5 mx-auto">
            <a href="#about">ABOUT US</a>
            <a href="#services">OUR SERVICES</a>
            <a href="#workWithUs">WORK WITH US</a>
            <a href="#coments">BLOG</a>
          </div>
          <div className="flex justify-center items-center justify-self-end gap-2">
            <img
              src="button_before.svg"
              alt="Circulo com gradiente diagonal"
              width={16}
            />
            <a href="#">GET IN TOUCH</a>
          </div>
        </nav>
      </header>
    </>
  );
}
