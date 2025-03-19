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
      <div className="my-6">
        <section className="flex flex-col lg:flex-row justify-center lg:items-stretch items-center py-10 max-h-max-[700px] gap-8 lg:gap-12 max-w-7xl">
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
              <h3 className="max-lg:text-[28px] max-lg:mt-1 leading-tight">
                {titulo}
              </h3>
              <p className=" pt-5 text-[#555555] leading-normal">{texto}</p>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};
