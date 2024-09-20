import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowRight } from "lucide-react";

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
      <main className="space-y-20 w-full py-20 px-5">
        <div className="flex justify-center mb-56">
          <div className="flex justify-center space-y-5 items-center flex-col w-[580px] p-10">
            <h1 className="text-6xl antialiased font-semibold text-center">
              Balancing <br />
              Crypto Markets
            </h1>
            <p className="text-center text-lg text-[#94a3b8]">
              Our fully automated proprietary quantitative trading software
              provides 24/7 liquidity to 170+ crypto assets across 25+
              centralized spot and derivative crypto exchanges.
            </p>
            <button className="bg-gradient-to-bl from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] rounded-md py-2 px-4 hover:font-semibold transition-all">
              GET IN TOUCH
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="flex justify-center items-center flex-col gap-4 w-[580px]">
            <h1 className="text-4xl font-bold antialiased">
              About Gravity Team
            </h1>
            <p className="text-lg text-center text-[#94a3b8] ">
              At Gravity Team, we are on the mission to balance the supply and
              demand across crypto markets worldwide. We are a crypto native
              market maker founded by traders, developers, and innovators who
              are strong believers and supporters of the future of
              decentralization and digital assets.
            </p>
          </div>
          {/* aqui vai a grade com os valores */}
          <div className="grid grid-cols-4 p-8 w-[880px]">
            <div className="border-b border-r h-[170px] flex items-center justify-center flex-col border-[#5FA4E6] p-6 text-center">
              <h1 className="text-2xl font-semibold w-fit">~$100 billion</h1>
              <p className="text-gray-400">cumulative trading volume to date</p>
            </div>
            <div className="flex items-center justify-center flex-col border-x border-b h-[170px] border-[#5FA4E6] p-6 text-center bg-gradient-to-br from-[#665DCD] via-[#5FA4E6] to-[#D2AB67] text-white">
              <h1 className="text-3xl font-semibold">0.8%</h1>
              <p className="text-white">
                of the global crypto spot trading volume
              </p>
            </div>
            <div className="flex justify-center items-center flex-col border-x border-b h-[170px]  border-[#5FA4E6] p-6 text-center">
              <h1 className="text-3xl font-semibold">~30</h1>
              <p className="text-gray-400">Gravity Teammates (& growing)</p>
            </div>
            <div className="flex justify-center items-center flex-col border-l border-b h-[170px] border-[#5FA4E6] p-6 text-center">
              <h1 className="text-3xl font-semibold">25+</h1>
              <p className="text-gray-400 text-sm">
                leading global and local crypto exchanges
              </p>
            </div>
            <div className="flex justify-center items-center flex-col border-r border-t h-[150px] border-[#5FA4E6] p-6 text-center">
              <h1 className="text-3xl font-semibold">2017</h1>
              <p className="text-gray-400">start, crypto-natives</p>
            </div>
            <div className="flex justify-center items-center flex-col border-x border-t h-[150px] border-[#5FA4E6] p-6 text-center">
              <h1 className="text-3xl font-semibold">1,200+</h1>
              <p className="text-gray-400">crypto-asset pairs</p>
            </div>
            <div className="flex justify-center items-center flex-col border-x border-t h-[150px] border-[#5FA4E6] p-6 text-center">
              <h1 className="text-3xl font-semibold">24/7</h1>
              <p className="text-gray-400">liquidity</p>
            </div>
            <div className="flex items-center justify-center flex-col border-l border-t h-[150px] border-[#5FA4E6] p-6 text-center">
              <h1 className="text-3xl font-semibold">5 billion+</h1>
              <p className="text-gray-400">trades done to date</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col gap-20 items-center w-full">
          <div className="text-center flex justify-center flex-col items-center w-[520px] space-y-4">
            <h1 className="text-4xl antialiased">Crypto Market Making</h1>
            <p className="text-[#94a3b8]">
              We are a global crypto liquidity provider and algorithmic market
              maker. We trade digital assets listed on Centralized Exchanges in
              over 15 countries worldwide.
            </p>
          </div>

          <div className="w-4/6 mx-auto flex justify-between">
            <div className="space-y-6">
              <h1 className="text-4xl ">
                Market Making for <br /> Crypto Projects
              </h1>
              <p className="font-semibold text-lg">
                Accelerate your token’s journey by boosting its liquidity
              </p>
              <p className="w-4/6 text-justify text-lg text-[#94a3b8]">
                We invest in building long-term, sustainable relationships and
                support our projects in their growth journey with our services,
                industry expertise and network.
              </p>
              <div className="flex gap-3 px-3 py-2 rounded-md border-transparent w-fit bg-gradient-to-bl from-[#665DCD] via-[#5FA4E6] to-[#D2AB67]">
                <button>Learn more</button>
                <ArrowRight />
              </div>
            </div>
            <div>
              <img src="div.svg" alt="figures" width={900} />
            </div>
          </div>
          <div className="w-4/6 mx-auto flex justify-between">
            <div className="p-0">
              <img src="amostra.svg" alt="figures" width={1000} />
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl ">
                Market Making for <br /> Crypto Exchanges
              </h1>
              <p className="font-semibold">
                Attract more traders and projects with <br />
                deep order books & liquidity
              </p>
              <p className="w-4/6 text-justify text-[#94a3b8]">
                Our world-class market making services are proven to help local
                and emerging exchanges win traders and gain market-leading
                positions of up to 90% market dominance.
              </p>
              <div className="flex gap-3 px-3 py-2 rounded-md border-transparent w-fit bg-gradient-to-bl from-[#665DCD] via-[#5FA4E6] to-[#D2AB67]">
                <button>Learn more</button>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-4/6 flex justify-between items-center">
            <div>
              <h1 className="text-6xl font-semibold">Our Partners & Friends</h1>
            </div>
            <div>
              <img src="demos.svg" alt="demonstrações" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col space-y-5">
          <div className="flex space-y-4 justify-center flex-col items-center">
            <h1 className="text-5xl">We are in a good company</h1>
            <p className="text-xl text-center text-[#94a3b8]">
              Our partnerships have delivered great value to our projects and{" "}
              <br />
              we’re happy to share some of their feedback below
            </p>
          </div>
          <div className="w-3/6 h-[550px]">
            <Carousel
              placeholder="Carousel"
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-0 -translate-y-2/4"
                  placeholder="Icon Button"
                  size="lg"
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <img src="pagination2.svg" alt="arrow" />
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  onClick={handleNext}
                  className="!absolute top-2/4 w-[300px] right-0 -translate-y-2/4"
                  placeholder="Icon Button"
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <img src="pagination-default.svg" alt="arrow" width={300} />
                </IconButton>
              )}
            >
              <img src="comments.svg" alt="comentarios" />
              <img src="comments.svg" alt="comentarios" />
              <img src="comments.svg" alt="comentarios" />
            </Carousel>
          </div>
        </div>

        <div className="flex justify-center items-center w-full flex-col">
          <div className="w-4/6 flex justify-between items-center">
            <div className="bg-pattern bg-center bg-no-repeat">
              <h1 className="text-5xl">
                Join <br /> Gravity Team
              </h1>
            </div>
            <div className="w-[450px] space-y-3 text-[#94a3b8]">
              <p>
                Join our community of innovators, problem solvers and owners who
                apply scientific discovery techniques to make crypto markets a
                better place for everyone.
              </p>
              <p>
                As we emphasize it in our name – Gravity Team, we are a team. A
                team of bright, talented people, each masters of their
                specialty, curious about the world and eager to solve the new
                exciting cryptocurrency market problems, build cool stuff and
                have fun whilst doing so!
              </p>
              <button className="flex text-white gap-3 px-3 py-2 rounded-md border-transparent w-fit bg-gradient-to-bl from-[#665DCD] via-[#5FA4E6] to-[#D2AB67]">
                Learn more about working with us <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
