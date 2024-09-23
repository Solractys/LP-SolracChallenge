import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Toggle } from "@/components/ui/toggle";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center px-5 py-6">
        <div className="flex justify-center items-start gap-10">
          <div>
            <img src="logo.svg" alt="Logo da empresa" width={100} />
          </div>
          <div className="flex justify-start items-center gap-4 translate-y-1">
            <NavigationMenu className="w-full">
              <NavigationMenuList className="">
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger className="text-darkblue text-lg">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <NavigationMenuLink className="w-[170px] p-4 relative">
                      <p className="w-full">text</p>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg text-darkblue">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex justify-center items-center flex-col gap-10 w-full">
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg text-darkblue">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu className="mr-6">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-lg text-darkblue font-semibold"
                    href="/"
                  >
                    Enterprise
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="text-lg text-darkblue font-semibold"
                    href="/#"
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Select>
            <SelectTrigger className="w-[60px] rounded-[8px] border-0 border-[#050038]">
              <SelectValue
                placeholder={
                  <img
                    width={40}
                    src="https://em-content.zobj.net/source/apple/391/flag-united-states_1f1fa-1f1f8.png"
                  />
                }
              />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="br">
                <img
                  src="https://em-content.zobj.net/source/apple/391/flag-brazil_1f1e7-1f1f7.png"
                  alt=""
                  width={40}
                />
              </SelectItem>
              <SelectItem value="en">
                <img
                  src="https://em-content.zobj.net/source/apple/391/flag-united-states_1f1fa-1f1f8.png"
                  alt=""
                  width={40}
                />
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="space-x-5 flex items-center justify-center">
            <a href="#" className="text-lg text-darkblue font-medium">
              Contact Sales
            </a>
            <a className="text-lg text-darkblue font-medium">Login</a>
            <button className="bg-lightblue hover:bg-darkblue transition-colors font-semibold rounded-xl flex items-center gap-2 py-2 px-4 text-zinc-50">
              Sign up free <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </header>
      <main className="flex justify-center items-center flex-col">
        <section className="flex justify-center items-center py-10 px-40">
          <div className="space-y-5">
            <h1 className="text-5xl font-bold text-darkblue">
              Take ideas from <br />
              better to best
            </h1>
            <p className="text-lg text-zinc-500">
              Miro is your team's visual platform to connect, collaborate, and
              create — together.
            </p>
            <form className="w-[440px] space-y-4">
              <input
                type="text"
                name="email"
                placeholder="Enter your work email"
                className="border-zinc-400 border py-2 px-4  rounded-3xl w-full"
              />
              <button className="bg-lightblue w-full justify-center hover:bg-darkblue transition-colors font-semibold rounded-3xl flex items-center gap-2 py-2 px-4 text-zinc-50">
                Sign up free <ArrowRight size={15} />
              </button>
            </form>
            <p className="text-zinc-500 text-lg">
              Collaborate with your team within minutes
            </p>
            <div className=" flex justify-between items-center w-5/6 p-4 bg-zinc-100 rounded-xl">
              <div>
                <img src="stars.svg" alt="" />
                <p className="text-sm font-semibold ">
                  Based on 5149+ reviews:
                </p>
              </div>
              <div>
                <img src="logos.svg" alt="" />
              </div>
            </div>
          </div>

          <div>
            <img
              src="bg-1.svg"
              alt="Imagem demostrativa da plataforma"
              width={840}
            />
          </div>
        </section>
        <section className="py-10 px-20 flex justify-center items-center flex-col">
          <div className="flex justify-center flex-col items-center">
            <span className="text-xl text-zinc-500">Trusted by 45M+ users</span>
            <div className="flex py-10 justify-between items-center gap-12 ">
              <img src="companies/walmart.svg" alt="" />
              <img src="companies/cisco.svg" alt="" />
              <img src="companies/okta.svg" alt="" />
              <img
                src="companies/volvo.svg"
                alt=""
                className="translate-x-10"
              />
              <img src="companies/deloitte.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-col">
          <img
            src="target-yellow.svg"
            alt=""
            className=" translate-y-9 translate-x-32"
          />
          <div className="flex justify-center items-center flex-col py-10">
            <h1 className="text-5xl text-center font-bold text-darkblue">
              Collaborate without <br /> constraints
            </h1>
            <div className="flex justify-between items-start w-5/6 py-10 gap-20">
              <div className="w-4/6 space-y-4">
                <h1 className="font-bold text-2xl text-darkblue">
                  Free forever
                </h1>
                <p className="text-zinc-500">
                  Our free plan gives you unlimited team members, 3 boards, and
                  300+ expert-made templates. Signing up with your work email
                  lets you bring in your team faster. See our{" "}
                  <span className="text-lightblue">pricing plans</span> for more
                  features.
                </p>
              </div>
              <div className="w-4/6 space-y-4">
                <h1 className="font-bold text-darkblue text-2xl">
                  Easy integrations
                </h1>
                <p className="text-zinc-500">
                  Miro has 100+ powerful integrations with tools you already use
                  like G Suite, Slack, and Jira, so your workflow is seamless.
                  View the full list in our{" "}
                  <span className="text-lightblue">Marketplace</span> .
                </p>
              </div>
              <div className="w-4/6 space-y-4">
                <h1 className="text-darkblue text-2xl font-bold">
                  Security first
                </h1>
                <p className="text-zinc-500 ">
                  We treat your data like you would — with the utmost care. We
                  follow industry-leading security standards and give you tools
                  to protect intellectual property. Learn more at our{" "}
                  <span className="text-lightblue">Trust Center</span> .
                </p>
              </div>
            </div>
            <button className="bg-lightblue  justify-center hover:bg-darkblue transition-colors font-semibold rounded-3xl flex items-center gap-2 py-1 px-6 text-zinc-50">
              Sign up free <ArrowRight size={15} />
            </button>
          </div>
        </section>
        <section className="flex justify-between items-center p-10">
          <div className="w-3/6 px-20 space-y-5">
            <h1 className="text-darkblue font-bold text-5xl">
              Work together,
              <br />
              wherever you work
            </h1>
            <p className="text-lg text-zinc-500">
              In the office, remote, or a mix of the two, with Miro, your team
              can connect, collaborate, and co-create in one space no matter
              where you are.
            </p>
            <a
              href="#"
              className="decoration-white text-lightblue flex border-b-2 border-lightblue w-fit items-center"
            >
              Learn more <ArrowRight size={15} />
            </a>
          </div>
          <div>
            <img src="hybridwork.svg" alt="" width={550} />
          </div>
        </section>
        <section className="flex justify-between items-center p-10">
          <div>
            <img src="hybridwork2.svg" alt="" width={550} />
          </div>
          <div className="w-3/6 px-20 space-y-5">
            <h1 className="text-darkblue font-bold text-5xl">
              Connect <br />
              your tools, <br /> close your tabs
            </h1>
            <p className="text-lg text-zinc-500">
              Whether you want to edit your Google Docs, resolve Jira issues, or
              collaborate over Zoom, Miro has 100+ integrations with tools you
              already use and love.
            </p>
            <a
              href="#"
              className="decoration-white text-lightblue flex border-b-2 border-lightblue w-fit items-center"
            >
              Learn more <ArrowRight size={15} />
            </a>
          </div>
        </section>
        <section>
          <button className="  rounded-3xl py-2 px-4 bg-lightblue text-zinc-50 text-center hover:bg-darkblue flex items-center gap-2">
            view the report <ArrowRight size={15} />
          </button>
        </section>
        <section className="flex justify-center py-20 space-y-6 flex-col w-5/6">
          <h1 className="text-5xl text-darkblue font-bold">
            Built for the way you work
          </h1>
          <div className="flex justify-start items-center gap-5">
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Brainstorming
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Diagramming
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Meetings & Workshops
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Scrum Events
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Mapping
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Mapping
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Strategic Planning
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-4 self-start py-10">
              <h1 className="text-3xl font-bold text-darkblue">
                Brainstorming
              </h1>
              <p className="text-zinc-500 text-lg">
                Unleash creative ideas and build on them with the help of sticky
                notes, images, mind maps, videos, drawing capabilities — the
                list goes on.
              </p>
              <a
                href="/"
                className="hover:font-semibold transition text-lightblue flex items-center gap-2 w-fit"
              >
                Learn more <ArrowRight size={15} />
              </a>
            </div>
            <div className="shrink-0">
              <img src="brain-demo.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="flex justify-center py-20 space-y-6 flex-col w-5/6">
          <h1 className="text-5xl text-darkblue font-bold">
            Built for all kinds of teams
          </h1>
          <div className="flex justify-start items-center gap-5">
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              UX & Design
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Marketing
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Product Management
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Engineering
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Consultants
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Agile Coaches
            </button>
            <button className="bg-zinc-100 py-1 px-4 rounded-xl hover:bg-zinc-200 active:bg-zinc-300 transition-all">
              Sales
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-8 self-start py-10">
              <div className="text-lg flex justify-start items-start flex-col ">
                <div className="flex gap-5 justify-start items-center">
                  <Check size={15} />
                  <span className="text-zinc-500">Build low-fi wireframes</span>
                </div>
                <div className="flex gap-5 justify-start items-center">
                  <Check size={15} />
                  <span className="text-zinc-500">
                    Involve stakeholders in the design process
                  </span>
                </div>
                <div className="flex gap-5 justify-start items-center">
                  <Check size={15} />
                  <span className="text-zinc-500">
                    Run engaging design workshops
                  </span>
                </div>
              </div>
              <a
                href="/"
                className="hover:font-semibold transition text-lightblue flex items-center gap-2 w-fit"
              >
                Learn more <ArrowRight size={15} />
              </a>
              <div>
                <p className="text-lg text-zinc-500">
                  Integrate your favorite tools
                </p>
                <img src="tools.svg" alt="" />
              </div>
            </div>
            <div className="shrink-0">
              <img src="brain-demo.svg" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
