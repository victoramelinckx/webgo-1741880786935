"use client";

import Image from "next/image";
import { Element } from "react-scroll";

interface AboutUsProps {
  titulo: string;
  texto: string;
}

export const About = ({ titulo, texto }: AboutUsProps) => {
  return (
    <Element name="acerca" className="w-full flex justify-center bg-gray-50">
      <div>
        <section className="flex flex-col-reverse lg:flex-row justify-center lg:items-stretch items-center py-6 max-md:px-6 lg:py-10 max-h-max-[700px] gap-8 lg:gap-12 max-w-7xl">
          <div className="w-full lg:w-1/2 flex">
            <Image
              src={"/vacio.jpg"}
              alt=""
              width={0}
              height={0}
              className="w-full h-fill object-fill rounded-2xl"
            />
          </div>
          <div className="w-full lg:w-1/2 h-full flex flex-col space-y-8 lg:space-y-12">
            <div>
              <div className="flex flex-col gap-5">
                <span className=" text-[24px] text-[#0C0E1766] font-medium">
                  Message from the founder
                </span>
                <h3 className="max-lg:text-[36px] font-semibold  max-lg:mt-1 leading-tight">
                  {titulo}
                </h3>
              </div>

              <p className="max-md:text-[18px] pt-5 text-black lg:text-[#555555] leading-normal">
                {texto}
              </p>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};
