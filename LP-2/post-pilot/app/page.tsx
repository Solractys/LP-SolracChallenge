"use client";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { useSpring, useTrail, animated } from "@react-spring/web";
import React from "react";

export default function Home() {
  const [state, setState] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  function changeState2() {
    setState2(!state2);
  }
  function changeState() {
    setState(!state);
  }

  const springs = useSpring({
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config: { duration: 1000 },
  });
  return (
    <>
      <header className="flex justify-between items-center px-20 py-10 ">
        <div>
          <img src="logo.svg" alt="logo da empresa" width={250} />
        </div>
        <div className="flex justify-center items-center">
          <Menubar className="text-slate-900 text-5xl">
            <MenubarMenu>
              <MenubarTrigger className="text-lg">Resources</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="text-lg">
                Success stories
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="text-lg">Company</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="text-lg">Pricing</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <div className="space-x-2 flex justify-center items-center">
            <Button className=" py-2 px-3 bg-transparent text-lg text-slate-950 font-medium border-r-4 border-b-4 border-l-2 border-t-2 border-slate-950 rounded-lg hover:bg-[#FF6D2C] hover:text-white transition-all active:bg-[#883917]">
              login
            </Button>
            <Button className="py-2 px-3 text-lg font-medium border-r-4 border-b-4 border-l-2 border-t-2 border-slate-950 rounded-lg bg-[#FF6D2C] hover:bg-[#e08159] transition-all active:bg-[#883917]">
              create free account
            </Button>
          </div>
        </div>
      </header>
      <main onMouseEnter={changeState} className="text-slate-900">
        <section className="flex justify-between w-full px-10">
          <article className="z-10 w-4/6 my-40  m-10">
            <animated.div className={"space-y-5 w-full"} style={springs}>
              <h1 className="text-7xl font-extrabold text-slate-800">
                Meet your <br />
                <em className="covered-by-your-grace-regular text-[#009387]">
                  favorite
                </em>{" "}
                new (old) <br /> marketing channel.
              </h1>
              <p className="text-slate-500 text-xl w-4/6">
                Remarkable results. Easier than email. Postcard marketing
                reinvented for modern ecommerce.
              </p>
              <div className="w-3/6 gap-10 px-4 flex justify-start items-center">
                <button className="bg-[#FF6D2C] shadow-md rounded-xl hover:bg-[#ff7e47] transition-all border-slate-950 font-medium border-t-2 border-l-2 border-r-4 border-b-4 py-3 px-5 text-white uppercase">
                  Try it Risk-free
                </button>
                <div className="text-slate-950 font-semibold flex items-center justify-center flex-col">
                  <img src="stars.svg" alt="estrelas douradas" />
                  <p>5.0 Shopify Rating</p>
                </div>
              </div>
            </animated.div>
          </article>
          <figure className="absolute right-4 z-0">
            <img src="amostra1.svg" alt="imagem ilustrativa" />
          </figure>
        </section>

        <section className="flex justify-center items-center flex-col space-y-32 py-10 px-20 my-20">
          <h1 className="text-6xl font-bold text-center text-slate-900 antialiased">
            Trusted by thousands <br /> of top DTC{" "}
            <em className="covered-by-your-grace-regular animate-in animate-out text-[#009387]">
              brands.
            </em>
          </h1>
          <div className="flex justify-center items-center gap-20">
            <div>
              <img src="empresa1.svg" alt="" />
            </div>
            <div>
              <img src="empresa2.svg" alt="" />
            </div>
            <div>
              <img src="empresa3.svg" alt="" />
            </div>
            <div>
              <img src="empresa4.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-col space-y-20 py-10 px-10">
          <h1 className="text-6xl font-bold text-center text-slate-900 antialiased">
            Why use direct mail? <br /> It{" "}
            <em className="covered-by-your-grace-regular animate-in animate-out text-[#009387]">
              works
            </em>{" "}
            like crazy.
          </h1>
          <div className="flex justify-between w-4/5 px-20 items-center">
            <div className="text-center">
              <h1 className="text-6xl font-bold">28X</h1>
              <p className="text-slate-800 text-lg">
                Higher response rate <br /> than email & digital
              </p>
            </div>
            <div>
              <img src="grafico.svg" alt="" />
            </div>
            <div className="text-center">
              <h1 className="text-6xl font-bold">17 Days</h1>
              <p className="text-lg text-slate-800">
                Lifespan of a postcard vs. <br /> seconds for email or SMS
              </p>
            </div>
          </div>
        </section>

        <div className="flex justify-center items-center py-60">
          <h1 className="text-7xl font-bold text-center">
            PostPilot makes it a{" "}
            <em className="covered-by-your-grace-regular text-[#009387]">
              cinch
            </em>{" "}
            to <br />
            send personalized, profit-
            <br />
            generating postcards.
          </h1>
        </div>
        <section className="flex justify-start items-center px-40 py-20">
          <div className="w-[420px] space-y-2 ">
            <h1 className="font-bold w-full text-left text-6xl">
              <em className="covered-by-your-grace-regular text-[#009387]">
                Powerful
              </em>{" "}
              <br /> acquisition & retention
            </h1>
            <p className="text-slate-800">
              Send one-off or triggered campaigns to customers & prospects.
              Target email leads with MailMatch™.
            </p>
            <div>
              <img
                src="aspasIcon.svg"
                alt=""
                width={30}
                className=" translate-y-4 translate-x-5"
              />
              <div className="border-2 border-[#D1C7BE] rounded-lg p-4">
                <p className="italic">
                  It’s like Klaviyo for direct mail. The results are absolutely
                  insane.
                </p>
                <div className="flex justify-between pt-3 font-extrabold text-slate-500">
                  <span className="text-sm">Ash Melwani, CMO</span>
                  <img src="logoUser.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-end items-center px-40 py-20">
          <div className="w-[420px] space-y-2 ">
            <h1 className="font-bold w-fit text-left text-5xl">
              <em className="covered-by-your-grace-regular text-[#009387]">
                Fight back
              </em>{" "}
              against iOS updates, jacked-up CPCs & spam folders
            </h1>
            <p className="text-slate-800">
              Deliver your message to all of your customers — for less than the
              cost of a click.
            </p>
            <div>
              <img
                src="aspasIcon.svg"
                alt=""
                width={30}
                className=" translate-y-4 translate-x-5"
              />
              <div className="border-2 border-[#D1C7BE] rounded-lg p-4">
                <p className="italic">
                  PostPilot is our new weapon against sinking email engagement
                  and rising PPC costs. The results and ROI have been
                  outstanding. It’s now one of our core marketing channels to
                  increase acquisition & LTV.
                </p>
                <div className="flex justify-between pt-3 font-extrabold text-slate-500">
                  <span className="text-sm">Leah Keith, GM</span>
                  <img src="logoUser2.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-start items-center px-40 py-20">
          <div className="w-[420px] space-y-3 ">
            <h1 className="font-bold w-full text-left text-6xl">
              Done for{" "}
              <em className="covered-by-your-grace-regular text-[#009387]">
                you
              </em>{" "}
              <br />
            </h1>
            <p className="text-slate-800">
              From design & strategy to stamp-licking, our ecom experts help you
              every step of the way.
            </p>
            <div>
              <img
                src="aspasIcon.svg"
                alt=""
                width={30}
                className=" translate-y-4 translate-x-5"
              />
              <div className="border-2 border-[#D1C7BE] rounded-lg p-4">
                <p className="italic">
                  The team is so knowledgeable and beyond helpful. I’m blown
                  away by their communication, detail, and attentiveness and
                  always feel like they have our best interest in mind.
                  Definitely worth a try.
                </p>
                <div className="flex justify-between pt-3 font-extrabold text-slate-500">
                  <span className="text-sm">
                    Holly Davies, Marketing Director
                  </span>
                  <img src="logoUser3.svg" alt="" />
                </div>
              </div>
            </div>
            <button className="bg-[#FF6D2C] translate-y-6 text-sm shadow-md rounded-xl hover:bg-[#ff7e47] transition-all border-slate-950 font-medium border-t-2 border-l-2 border-r-4 border-b-4 py-3 px-5 text-white uppercase">
              Try it Risk-free
            </button>
          </div>
        </section>

        <section className="flex text-center py-40 justify-center items-center flex-col">
          <div className="text-6xl font-bold">
            <h1>Everything your brand needs to</h1>
            <h1 className="covered-by-your-grace-regular text-[#009387]">
              make your brand unforgettable
            </h1>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 gap-10  py-20">
            <div className="flex justify-center items-center space-y-4 flex-col m-3 w-[300px] h-[300px] p-5">
              <article>
                <img src="demos/demo1.svg" alt="" />
              </article>
              <h1 className="text-xl font-bold text-slate-800">
                Plug-and-play with your stack
              </h1>
              <p className="text-slate-600">
                Native integrations provide seamless segmentation, automation &
                tracking. No clunky spreadsheets.
              </p>
            </div>
            <div className="flex justify-center items-center space-y-4 flex-col w-[300px] m-3 h-[300px] p-5">
              <article>
                <img src="demos/demo2.svg" alt="" />
              </article>
              <h1 className="text-xl font-bold text-slate-800">
                Run campaigns on autopilot
              </h1>
              <p className="text-slate-600">
                Ink profits while you sleep: Just set it and forget it.
              </p>
            </div>
            <div className="flex justify-center items-center space-y-4 flex-col w-[300px] m-3 h-[300px] p-5">
              <article>
                <img src="demos/demo3.svg" alt="" />
              </article>
              <h1 className="text-xl font-bold text-slate-800">
                Real-time ROI dashboard
              </h1>
              <p className="text-slate-600">
                Track performance of every postcard by customer or discount
                code. Your CFO will love it.
              </p>
            </div>
            <div className="flex justify-center items-center space-y-4 flex-col w-[300px] m-3 h-[300px] p-5">
              <article>
                <img src="demos/demo4.svg" alt="" />
              </article>
              <h1 className="text-xl font-bold text-slate-800">
                Deliver WOW with *real* handwritten cards
              </h1>
              <p className="text-slate-600">
                Our proprietary robots use real pens and ink for an
                unforgettable VIP touch.
              </p>
            </div>
            <div className="flex justify-center items-center space-y-4 flex-col w-[300px] m-3 h-[300px] p-5">
              <article>
                <img src="demos/demo5.svg" alt="" />
              </article>
              <h1 className="text-xl font-bold text-slate-800">
                Predictable pricing
              </h1>
              <p className="text-slate-600">
                Unlike CPCs, postage rates don’t change based on competition or
                who you’re targeting.
              </p>
            </div>
            <div className="flex justify-center items-center space-y-4 flex-col w-[300px] m-3 h-[300px] p-5">
              <article>
                <img src="demos/demo6.svg" alt="" />
              </article>
              <h1 className="text-xl font-bold text-slate-800">
                Complimentary concierge service
              </h1>
              <p className="text-slate-600">
                DTC is in our DNA. Our pros will build your strategy and custom
                designs using battle-tested best practices.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
