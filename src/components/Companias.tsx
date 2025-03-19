"use client";

import Image from "next/image";
import { Element } from "react-scroll";
import { IoLogoSass } from "react-icons/io";

interface CompaniasProps {
  titulo: string;
  texto: string;
}

export const Companias = ({ titulo, texto }: CompaniasProps) => {
  return (
    <Element name="acerca" className="w-full flex justify-center">
      <div className="my-6">
        <section className="flex flex-col justify-center lg:items-stretch items-center py-10 max-h-max-[700px] gap-8 lg:gap-12 max-w-6xl">
          <div>
            <h3 className="text-[36px] max-w-xl font-semibold leading-tight text-center">
              {titulo}
            </h3>
          </div>

          <div className="w-full flex gap-16 items-center justify-center">
            {/* <Image
              src={"/vacio.jpg"}
              alt=""
              width={0}
              height={0}
              className="w-full h-fill object-fill rounded-2xl"
            /> */}
            <IoLogoSass className="w-20 h-auto" />
            <IoLogoSass className="w-20 h-auto" />
            <IoLogoSass className="w-20 h-auto" />
            <IoLogoSass className="w-20 h-auto" />
            <IoLogoSass className="w-20 h-auto" />
          </div>
        </section>
      </div>
    </Element>
  );
};
