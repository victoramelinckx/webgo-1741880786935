// components/Hero.tsx
"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { Button } from "./Button";
import imagen from "../../public/vacio.jpg";
import { BusinessInfo } from "./BusinessInfo";
import { BookHero } from "./BookHero";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta1: string;
}

export const Hero = ({ headline, subheadline, cta1 }: HeroProps) => {
  return (
    <section
      className="flex flex-col max-lg:pt-4 bg-white relative 
         w-full justify-center items-center overflow-hidden"
    >
      <div className="relative flex max-md:flex-col max-md:gap-7 max-lg:px-6 justify-start w-full  pt-20 lg:pt-40 max-w-7xl z-20">
        <div className="flex flex-col max-w-3xl md:mb-16">
          <div className="mt-2 ">
            <h1 className="text-black font-semibold uppercase tracking-tight text-[36px] md:text-[64px] xl:text-[90px] max-lg:mt-4 leading-[115%]">
              {headline}
            </h1>
          </div>
          <div className="mt-6">
            <p className="max-w-2xl justify-start font-medium tracking-normal text-[16px] leading-[170%]  text-[#333333]">
              {subheadline}
            </p>
          </div>
          <div className=" max-md:hidden mt-8 flex flex-row space-x-6">
            <Link to="contacto" smooth>
              <Button title={cta1} className=" max-lg:mb-4" />
            </Link>
            {/* <Dialog>
              <DialogTrigger>
                <div className="flex flex-row space-x-2 items-center transition-all ease-in-out duration-300 hover:-translate-y-1">
                  <FaCirclePlay className=" text-primary-500 w-6 h-6" />
                  <p className=" font-semibold">See more</p>
                </div>
              </DialogTrigger>
              <DialogContent className="flex justify-center aspect-video md:aspect-auto rounded-xl overflow-hidden">
                <video
                  className="h-full object-contain rounded-xl"
                  autoPlay
                  controls
                  src="/videos/vsl_compressed.mp4"
                />
              </DialogContent>
            </Dialog> */}
          </div>
        </div>
        <div className="md:absolute md:right-0">
          <div className="flex flex-col gap-8 justify-center h-full w-full">
            <div className="flex flex-row items-center justify-center md:mt-20">
              <FcGoogle className=" w-8 h-auto mr-2" />
              <span className="text-lg font-bold text-black mr-2">4.7</span>

              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className=" w-4 lg:w-6 fill-yellow-400 " />
              ))}
              <span className="ml-2 text-lg lg:text-2xl font-medium text-black">
                +3200 Reviews
              </span>
            </div>

            <BookHero heading="GET A FREE QUOTE" />
          </div>
        </div>
      </div>
      <div className="relative h-[458px] lg:h-[850px] w-full">
        <div className="bottom-14 lg:bottom-0 h-[458px] lg:h-[850px] left-[calc(50%-100%/2)] mix-blend-multiply overflow-hidden absolute w-full z-0">
          <video
            src="https://framerusercontent.com/assets/4DdEt8DwOWgsF6p0pTM6ssx40Q.mp4"
            loop
            playsInline
            className="cursor-auto w-full h-full block object-cover object-center"
          />
        </div>
      </div>

      {/* <BusinessInfo /> */}
    </section>
  );
};
