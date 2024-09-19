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
      <main>
        <div className="flex justify-center">
          <div className="flex justify-center space-y-5 items-center flex-col w-[580px] p-10">
            <h1 className="text-5xl antialiased font-bold text-center">
              Balancing <br />
              Crypto Markets
            </h1>
            <p className="text-center text-lg text">
              Our fully automated proprietary quantitative trading software
              provides 24/7 liquidity to 170+ crypto assets across 25+
              centralized spot and derivative crypto exchanges.
            </p>
            <button className="bg-gradient-to-bl from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] rounded-md p-2 hover:font-semibold transition-all">GET IN TOUCH</button>
          </div>
        </div>
      </main>

    </>
  );
}
