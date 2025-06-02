import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className=" bg-[url(/Images/hero-img.jpg)] h-[100vh] bg-center bg-repeat bg-cover">
        <header className="pt-7 px-12 flex justify-between">
          <a href="">
            <p className="font-bold text-4xl ">Serenity*</p>
          </a>
          <nav className="font-normal text-[16px] flex gap-6">
            <ul className="lg:flex hidden gap-6 items-center ">
              <a href="" className="hover:text-gray-300">
                Home
              </a>
              <a href="" className="hover:text-gray-300">
                Properties
              </a>
              <a href="" className="hover:text-gray-300">
                About
              </a>
              <a href="" className="hover:text-gray-300">
                Contact
              </a>
            </ul>
            <a href="" className="sm:flex hidden">
              <button className="bg-black rounded-xl py-2 px-6 hover:bg-gray-900 cursor-pointer transition">
                Book a Tour
              </button>
            </a>
          </nav>
        </header>
        <div className="font-normal rounded-lg absolute lg:bottom-32 bottom-20 left-6 md:left-12 max-w-80 md:max-w-lg lg:max-w-xl bg-black/30 p-8 backdrop-blur-sm">
          <h1 className="font-light text-2xl md:text-4xl lg:text-5xl mb-4">
            Discover Your Dream Luxury Home
          </h1>
          <p className=" text-[12px] md:text-[14px] lg:text-[18px] mb-8">
            Where Exceptional Design Meets Unparalleled Comfort
          </p>
          <div className="flex flex-col md:flex-row md:gap-4 gap-2">
            <a href="#">
              <button className="bg-black rounded-lg px-8 py-3 cursor-pointer hover:bg-gray-900 transition">
                Explore Properties
              </button>
            </a>
            <a href="#">
              <button className=" cursor-pointer rounded-lg bg-white/20 px-8 py-3 backdrop-blur-sm transition hover:bg-white/30">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
