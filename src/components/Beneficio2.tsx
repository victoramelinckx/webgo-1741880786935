// components/How.tsx
"use client";

import Image from "next/image";
import { Element } from "react-scroll";
import { SiStarbucks } from "react-icons/si";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaCalculator } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { GiAlliedStar } from "react-icons/gi";

interface BeneficioProps {
  Titulo: string;
  beneficioTitulo1: string;
  beneficio1: string;
  beneficioTitulo2: string;
  beneficio2: string;
}

export const Beneficio2 = ({
  Titulo,
  beneficioTitulo1,
  beneficio1,
  beneficioTitulo2,
  beneficio2,
}: BeneficioProps) => {
  return (
    <Element
      name="funcionamiento"
      className="w-full flex flex-col justify-center bg-white py-14"
    >
      <div className="flex max-w-7xl w-full mb-36 mx-auto">
        {" "}
        <h3 className=" text-start font-semibold text-[56px] text-black leading-[120%] tracking-tighter">
          We are providing secured & trusted moving service since 2006. Our goal
          is to provide the best experience of your moving.
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[80px] gap-y-[40px] mx-auto max-w-7xl">
        {/* Item1 */}
        <div className="flex flex-col items-start  max-w-lg">
          <div className="mb-16">
            <p className="text-[#356dff] text-[120px] font-normal">40M</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black">
              Reviewed & Trusted
            </h3>
            <p className="mt-2 text-gray-700">
              Whether you decide to proceed with a single job or use our
              discount.
            </p>
          </div>
        </div>
        {/* Item2 */}
        <div className="flex flex-col items-start  max-w-lg">
          <div className="mb-16">
            <p className="text-[#356dff] text-[120px] font-normal">15K+</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black">Happy Clients</h3>
            <p className="mt-2 text-gray-700">
              Whether you decide to proceed with a single job or use our
              discount.
            </p>
          </div>
        </div>
        {/* Item3 */}
        <div className="flex flex-col items-start  max-w-lg">
          <div className="mb-16">
            <p className="text-[#356dff] text-[120px] font-normal">2K+</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black">
              Positive Reviews
            </h3>
            <p className="mt-2 text-gray-700">
              Whether you decide to proceed with a single job or use our
              discount.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};
